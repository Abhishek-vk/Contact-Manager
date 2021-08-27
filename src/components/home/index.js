import ContactList from "./contactList";
import { useState, useEffect } from "react";
import ContactDetails from "./contactDetails";
import ContactServices from "../../service/contactServices";
import "../css/loading.css";

export default function Homepage(props) {
	const [loading, setLoading] = useState(true);
	const [rawList, setRawList] = useState([]);
	const [contactList, setcontactList] = useState([]);
	const [total, setTotal] = useState(0);
	const [activeContact, setActiveContact] = useState({
		id: "",
		name: "",
		avatar: "",
		"user-details": {
			phone: "",
			email: "",
			address: "",
			website: "",
		},
	});

	const GroupContacts = arrayData => {
		const sortName = (obj1, obj2) => {
			if (obj1.name < obj2.name) return -1;
			else if (obj1.name > obj2.name) return 1;
			else return 0;
		};
		arrayData.sort(sortName);
		let GroupedContacts = [],
			count = 0;
		for (let index = 0; index < 27; index++) {
			GroupedContacts.push([]);
		}
		arrayData.forEach(contact => {
			let firstLetterAscii = contact.name.charCodeAt(0);
			let groupIndex = 0;
			if (firstLetterAscii > 64 && firstLetterAscii < 91) groupIndex = firstLetterAscii - 64;
			else if (firstLetterAscii > 96 && firstLetterAscii < 123)
				groupIndex = firstLetterAscii - 96;
			GroupedContacts[groupIndex].push({
				index: count,
				...contact,
			});
			count++;
		});
		return GroupedContacts;
	};

	useEffect(() => {
		sessionStorage.setItem("Active", false);
		ContactServices.getContactList()
			.then(result => {
				setTotal(result.total);
				setRawList(result.data);
				return result.data;
			})
			.then(data => {
				setcontactList(GroupContacts(data));
				setLoading(false);
			})
			.catch(error => alert(error));
	}, []);

	const updateContactList = (action, data) => {
		let tempRawList;
		switch (action) {
			case "Update":
				tempRawList = rawList.map(contact => (contact.id === data.id ? data : contact));
				setActiveContact(data);
				setRawList(tempRawList);
				setcontactList(GroupContacts(tempRawList));
				break;

			case "Delete":
				tempRawList = rawList.filter(contact => contact.id !== data.id);
				setActiveContact({
					id: "",
					name: "",
					avatar: "",
					"user-details": {
						phone: "",
						email: "",
						address: "",
						website: "",
					},
				});
				setTotal(total - 1);
				setRawList(tempRawList);
				setcontactList(GroupContacts(tempRawList));
				break;

			default:
				break;
		}
	};

	return (
		<>
			{loading ? (
				<div className="h1 d-flex m-auto loadingText">Loading...</div>
			) : (
				<div className="overflow-hidden container-fluid" style={{ flex: "1" }}>
					<div className="row h-100 position-relative">
						<ContactList
							total={total}
							list={contactList}
							setActiveContact={setActiveContact}
						/>
						<ContactDetails
							{...activeContact}
							selected={!!activeContact.id}
							updateList={updateContactList}
						/>
					</div>
				</div>
			)}
		</>
	);
}
