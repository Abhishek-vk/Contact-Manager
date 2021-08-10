import ContactList from "./contactList";
import { useState, useEffect } from "react";
import ContactDetails from "./contactDetails";
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

    const GroupContacts = (arrayData) => {
        let GroupedContacts = [],
            count = 0;
        for (let index = 0; index < 27; index++) {
            GroupedContacts.push([]);
        }
        arrayData.forEach((contact) => {
            let firstLetterAscii = contact.name.charCodeAt(0);
            let groupIndex = 0;
            if (firstLetterAscii > 64 && firstLetterAscii < 91)
                groupIndex = firstLetterAscii - 64;
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
        fetch("http://localhost:8000/api/v1/contacts")
            .then((response) => response.json())
            .then((result) => {
                setTotal(result.total);
                setRawList(result.data);
                return result.data;
            })
            .then((data) => {
                setcontactList(GroupContacts(data));
                setLoading(false);
            })
            .catch((error) => alert(error));
    }, []);

    const showActiveContact = (contact) => {
        setActiveContact(contact);
    };

    const updateContactList = (action, data) => {
        switch (action) {
            case "Update":
                let tempRawList = rawList;
                for (let i = 0; i < tempRawList.length; i++) {
                    if (tempRawList[i].id === data.id) {
                        tempRawList[i] = { ...rawList[i], ...data };
                        setActiveContact(tempRawList[i]);
                    }
                }
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
                <div
                    className="overflow-hidden container-fluid"
                    style={{ flex: "1" }}
                >
                    <div className="row h-100">
                        <ContactList
                            total={total}
                            list={contactList}
                            showActiveContact={showActiveContact}
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
