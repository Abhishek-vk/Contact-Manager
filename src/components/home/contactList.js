import { useEffect, useState } from "react";
import "../css/contactList.css";

const ContactBox = ({ contact, isActive, setActive, showActiveContact }) => {
    const { name, index } = contact;
    return (
        <div
            className={
                isActive()
                    ? "ps-2 py-3 contactBox activeContactBox"
                    : "ps-2 py-3 contactBox"
            }
            onClick={() => {
                setActive(index);
                showActiveContact();
            }}
        >
            {name}
        </div>
    );
};

export default function ContactList({ list, total, showActiveContact }) {
    const [isActiveList, setActiveList] = useState([]);

    useEffect(() => {
        setActiveList(new Array(total).fill(false));
    }, [total]);

    const setActive = (index) => {
        let tempIsActive = [...isActiveList];
        tempIsActive.fill(false);
        tempIsActive[index] = true;
        setActiveList(tempIsActive);
    };
    return (
        <div id="contactList" className="h-100 col-auto pe-0">
            {list.map((contactGroup) =>
                !!contactGroup.length
                    ? contactGroup.map((contact, index) => (
                          <ContactBox
                              key={index}
                              contact={contact}
                              isActive={() => isActiveList[contact.index]}
                              setActive={setActive}
                              showActiveContact={() =>
                                  showActiveContact(contact)
                              }
                          />
                      ))
                    : null
            )}
        </div>
    );
}
