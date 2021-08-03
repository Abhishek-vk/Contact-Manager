import ContactList from "./contactList";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [contactList, setcontactList] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/contacts")
            .then((response) => response.json())
            .then((result) => {
                // setActiveList(new Array(result.total).fill(false));
                setTotal(result.total);
                return result.data;
            })
            .then((data) => {
                let GroupedContacts = [],
                    count = 0;
                for (let index = 0; index < 27; index++) {
                    GroupedContacts.push([]);
                }
                data.forEach((contact) => {
                    GroupedContacts[contact.name.charCodeAt(0) - 64].push({
                        index: count,
                        ...contact,
                    });
                    count++;
                });
                setcontactList(GroupedContacts);
            })
            .catch((err) => console.log(err));
    }, []);

    const showActiveContact = (contact) => {
        console.log(contact);
    };

    return (
        <div className="overflow-hidden" style={{ flex: "1" }}>
            <div className="row h-100">
                <ContactList
                    total={total}
                    list={contactList}
                    showActiveContact={showActiveContact}
                />
                <div className="col p-0"></div>
            </div>
        </div>
    );
}
