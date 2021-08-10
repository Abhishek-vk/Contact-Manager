import { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import CdIconList from "./contactDetailsIcons";
import altUserImg from "../img/user-alt.png";
import "../css/contactDetails.css";

const ContactDetails = (props) => {
    const { id, name, avatar } = props;

    const [contact, setContact] = useState({ id, name, avatar });
    const [details, setDetails] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        let tempDetails = { phone: "", email: "", address: "", website: "" };
        setDetails({
            ...tempDetails,
            ...props["user-details"],
        });
        setEdit(false);
        setContact({ id: props.id, name: props.name, avatar: props.avatar });
    }, [props]);

    const changeHandler = (target, value, isInnerDetails) => {
        console.log(value);
        if (!isInnerDetails) {
            setContact({ ...contact, [target]: value });
            return;
        }
        setDetails({ ...details, [target]: value });
    };

    const resetAll = () => {
        let tempDetails = { phone: "", email: "", address: "", website: "" };
        setDetails({
            ...tempDetails,
            ...props["user-details"],
        });
        setEdit(false);
        setContact({ id: props.id, name: props.name, avatar: props.avatar });
    };

    const saveAll = () => {
        setEdit(false);
        const body = { ...contact, "user-details": details };
        fetch("http://localhost:8000/api/v1/contacts", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.statusCode === 200) {
                    props.updateList("Update", res.newData);
                } else console.log(res);
            });
    };

    return (
        <div id="contact-details" className="col px-0">
            <div className="shadow text-center pt-4 pb-4 rounded-top rounded-circle">
                <img
                    src={`${avatar}`}
                    alt="No icon"
                    onError={(e) => (e.target.src = altUserImg)}
                    width="100px"
                    height="100px"
                    className="rounded-circle"
                    style={{ background: avatar }}
                ></img>
                <ContentEditable
                    id="name"
                    name="name"
                    disabled={!edit}
                    className="mt-3 w-25 mx-auto p-2"
                    html={contact.name ? contact.name : "Name"}
                    onChange={(e) => {
                        let target = e.currentTarget.attributes.name.value;
                        let value = e.currentTarget.innerText;
                        console.log(e);
                        changeHandler(target, value, false);
                    }}
                />
            </div>
            {props.selected ? (
                <div className="text-end m-4 fs-5 text-primary">
                    {edit ? (
                        <>
                            <i
                                className="fad fa-save me-3"
                                style={{ cursor: "pointer" }}
                                onClick={saveAll}
                            ></i>
                            <i
                                className="fad fa-file-times me-3 text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={resetAll}
                            ></i>
                        </>
                    ) : (
                        <i
                            className="fad fa-pencil-alt me-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => setEdit(true)}
                        ></i>
                    )}
                </div>
            ) : (
                <div className="p-4"></div>
            )}
            <div id="details" className="container-md">
                <div className="row">
                    {Object.keys(details).map((detail) => {
                        return (
                            <div
                                key={detail}
                                className="col-sm-6 contact-detail"
                            >
                                <div className="row">
                                    <div className="col-md-4 col-2 text-end">
                                        <div className="d-flex flex-row-reverse align-items-center h-100">
                                            {CdIconList[detail]}
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-10 text-break">
                                        <ContentEditable
                                            html={
                                                !!details[detail]
                                                    ? details[detail]
                                                    : detail[0].toUpperCase() +
                                                      detail.slice(1)
                                            }
                                            name={detail}
                                            onChange={(e) => {
                                                let target =
                                                    e.currentTarget.attributes
                                                        .name.value;
                                                let value =
                                                    e.currentTarget.innerText;
                                                changeHandler(
                                                    target,
                                                    value,
                                                    true
                                                );
                                            }}
                                            className="p-2"
                                            disabled={!edit}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
