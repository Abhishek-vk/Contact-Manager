import altUserImg from "../img/user-alt.png";

const ContactDetails = (props) => {
    let { name, avatar } = props;
    console.log(avatar);
    return (
        <div className="col ps-0">
            <div class="shadow text-center pt-5 pb-4 rounded-top rounded-circle">
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
        </div>
    );
};

export default ContactDetails;
