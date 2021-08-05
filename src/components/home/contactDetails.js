import { useState, useEffect } from "react";
import CdIconList from "./contactDetailsIcons";
import altUserImg from "../img/user-alt.png";
import "../css/contactDetails.css";

const ContactDetails = (props) => {
    let { name, avatar } = props;
    const [details, setDetails] = useState({});
    useEffect(() => {
        let tempDetails = { phone: "", email: "", address: "", website: "" };
        setDetails({
            ...tempDetails,
            ...props["user-details"],
        });
    }, [props]);
    return (
        <div id="contact-details" className="col px-0">
            <div className="shadow text-center pt-5 pb-4 rounded-top rounded-circle">
                <img
                    src={`${avatar}`}
                    alt="No icon"
                    onError={(e) => (e.target.src = altUserImg)}
                    width="100px"
                    height="100px"
                    className="rounded-circle"
                    style={{ background: avatar }}
                ></img>
                <div className="mt-3">{!!name ? name : "Name"}</div>
            </div>
            <div id="details" className="container">
                <div className="row">
                    {Object.keys(details).map((detail) => {
                        return (
                            <div
                                key={detail}
                                className="col-md-6 contact-detail"
                            >
                                <div className="row">
                                    <div className="col-4 text-end">
                                        {CdIconList[detail]}
                                    </div>
                                    <div className="col-auto">
                                        {!!details[detail]
                                            ? details[detail]
                                            : detail[0].toUpperCase() +
                                              detail.slice(1)}
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
