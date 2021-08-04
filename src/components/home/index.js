import ContactList from "./contactList";
import { useState, useEffect } from "react";
import ContactDetails from "./contactDetails";
import "../css/loading.css";

export default function Homepage() {
    const [loading, setLoading] = useState(true);
    const [contactList, setcontactList] = useState([]);
    const [total, setTotal] = useState(0);
    const [activeContact, setActiveContact] = useState({
        id: "",
        name: "",
        avatar: "",
        userDetails: {
            phone: "",
            email: "",
            address: "",
            website: "",
        },
    });

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/contacts")
            .then((response) => response.json())
            .then((result) => {
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
                setcontactList(GroupedContacts);
                setLoading(false);
            })
            .catch((error) => alert(error));
    }, []);

    const showActiveContact = (contact) => {
        setActiveContact(contact);
    };

    return (
        <>
            {loading ? (
                <div className="h1 d-flex m-auto loadingText">Loading...</div>
            ) : (
                <div className="overflow-hidden" style={{ flex: "1" }}>
                    <div className="row h-100">
                        <ContactList
                            total={total}
                            list={contactList}
                            showActiveContact={showActiveContact}
                        />
                        <ContactDetails {...activeContact} />
                    </div>
                </div>
            )}
        </>
    );
}
