import ContactList from "./contactList";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [contactList, setcontactList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/contacts")
            .then((response) => response.json())
            .then((result) => result.data)
            .then((data) => {
                let GroupedContacts = [];
                for (let index = 0; index < 27; index++) {
                    GroupedContacts.push([]);
                }
                console.log(GroupedContacts);
                data.forEach((contact) => {
                    GroupedContacts[contact.name.charCodeAt(0) - 64].push(
                        contact
                    );
                });
                setcontactList(GroupedContacts);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="overflow-hidden" style={{ flex: "1" }}>
            <div class="row h-100">
                <ContactList list={contactList} />
                <div className="col p-0"></div>
            </div>
        </div>
    );
}
