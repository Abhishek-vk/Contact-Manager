import React, { useEffect, useState } from "react";
import altUserImg from "../img/user-alt.png";
import "../css/contactList.css";

const ContactBox = ({ contact, isActive, setActive, setActiveContact }) => {
	const { name, avatar, index } = contact;
	return (
		<div
			className={
				isActive()
					? "ps-3 py-2 contactBox d-flex align-items-center activeContactBox"
					: "ps-3 py-2 contactBox d-flex align-items-center"
			}
			onClick={() => {
				setActive(index);
				setActiveContact();
			}}>
			<div>
				<img
					src={`${avatar}`}
					alt="No icon"
					onError={e => (e.target.src = altUserImg)}
					width="40px"
					height="40px"
					className="rounded-circle"
					style={{ background: avatar }}></img>
			</div>
			<div className="mx-2 mt-1 text-nowrap overflow-hidden text-truncate">{name}</div>
		</div>
	);
};

export default function ContactList({ list, total, setActiveContact }) {
	const [isActiveList, setActiveList] = useState([]);

	useEffect(() => {
		setActiveList(new Array(total).fill(false));
	}, [total]);

	const setActive = index => {
		let tempIsActive = [...isActiveList];
		tempIsActive.fill(false);
		tempIsActive[index] = true;
		setActiveList(tempIsActive);
	};
	return (
		<div id="contactList" className="h-100 col-auto px-0">
			{list.map((contactGroup, index) =>
				!!contactGroup.length ? (
					<React.Fragment key={index}>
						<div
							className="position-sticky top-0 bg-light small fw-bold"
							style={{
								fontFamily: '"Averia Serif Libre", cursive',
								cursor: "default",
								color: "#708090",
							}}>
							{String.fromCharCode(index + 64)}
						</div>
						{contactGroup.map(contact => (
							<ContactBox
								key={contact.index}
								contact={contact}
								isActive={() => isActiveList[contact.index]}
								setActive={setActive}
								setActiveContact={() => setActiveContact(contact)}
							/>
						))}
					</React.Fragment>
				) : null
			)}
		</div>
	);
}
