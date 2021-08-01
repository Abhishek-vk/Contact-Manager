import "../css/contactList.css";

const ContactBox = (props) => {
    const { name } = props.contact;
    return <div className="ps-2 py-3 contactBox">{name}</div>;
};

export default function ContactList(props) {
    return (
        <div id="contactList" className="h-100 col-auto pe-0">
            {props.list.map((contactGroup) =>
                !!contactGroup.length
                    ? contactGroup.map((contact) => (
                          <ContactBox key={contact.id} contact={contact} />
                      ))
                    : null
            )}
        </div>
    );
}
