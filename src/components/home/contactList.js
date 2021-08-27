import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import altUserImg from "../img/user-alt.png";
import "../css/contactList.css";

const ContactBox = ({ contact, isActive, setActive, setActiveContact }) => {
	const { name, avatar, index } = contact;
	const { phone } = contact["user-details"];
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
				sessionStorage.setItem("Active", true);
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
			<div className="mx-2 mt-1 text-nowrap overflow-hidden text-truncate">
				{!!name ? name : phone}
			</div>
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
		<div
			id="contactListContainer"
			className="h-100 col-auto pb-5 pb-md-0 px-0 position-relative">
			<div id="contactList" className="h-100">
				{list.map((contactGroup, index) =>
					!!contactGroup.length ? (
						<React.Fragment key={index}>
							<div
								className="position-sticky top-0 bg-light small fw-bold"
								style={{
									fontFamily: '"Averia Serif Libre", cursive',
									cursor: "default",
									color: "#708090",
									zIndex: "9",
								}}>
								{String.fromCharCode(index + 64)}
							</div>
							{contactGroup.map(contact => (
								<ContactBox
									key={contact.index}
									contact={contact}
									isActive={() => isActiveList[contact.index]}
									setActive={setActive}
									setActiveContact={() => {
										sessionStorage.getItem("Active") === "false"
											? setActiveContact({ ...contact })
											: setActiveContact(contact);
									}}
								/>
							))}
						</React.Fragment>
					) : null
				)}
			</div>
			<NavLink to="/AddContact">
				<div id="add-user-icon" className="position-sticky float-end">
					<i className="fas fa-user-plus"></i>
				</div>
			</NavLink>
		</div>
	);
}
