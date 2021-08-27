import { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import CdIconList from "./contactDetailsIcons";
import altUserImg from "../img/user-alt.png";
import ContactServices from "../../service/contactServices";
import "../css/contactDetails.css";
import { NavLink } from "react-router-dom";

const ContactDetails = props => {
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
		let tempContact = { ...contact, name: contact.name.trim() };
		let tempDetails = details;
		Object.keys(tempDetails).forEach(detail => {
			tempDetails[detail] = tempDetails[detail].trim();
		});
		const body = { ...tempContact, "user-details": tempDetails };
		ContactServices.editContact(body).then(res => {
			if (res.statusCode === 200) {
				props.updateList("Update", res.newData);
			} else console.log(res);
		});
	};

	const Delete = () => {
		ContactServices.deleteContact(id).then(res => {
			if (res.statusCode === 200) {
				props.updateList("Delete", res.deletedData);
			} else console.log(res);
		});
	};

	return (
		<>
			<div
				id="contact-details"
				className={`col px-0 pb-5 pb-md-0 ${
					sessionStorage.getItem("Active") === "false" ? "d-none d-md-block" : ""
				}`}>
				<div className="d-block d-md-none sticky-top">
					<NavLink
						exact
						to="/"
						onClick={() => {
							sessionStorage.setItem("Active", false);
						}}>
						<i className="fad fa-angle-double-left fs-5 ms-3 mt-1 text-primary"></i>
					</NavLink>
				</div>
				<div className="shadow text-center pt-4 pb-4 rounded-top rounded-circle">
					<img
						src={`${avatar}`}
						alt="No icon"
						onError={e => (e.target.src = altUserImg)}
						width="100px"
						height="100px"
						className="rounded-circle"
						style={{ background: avatar }}
					/>
					<ContentEditable
						id="name"
						name="name"
						disabled={!edit}
						className="mt-3 mx-auto p-2"
						html={contact.name}
						placeholder="Name"
						onChange={e => {
							let target = e.currentTarget.attributes.name.value;
							let value = e.currentTarget.innerText;
							changeHandler(target, value, false);
						}}
					/>
				</div>
				{props.selected ? (
					<div className="text-end m-4 fs-5 text-primary">
						{edit ? (
							<>
								<i
									title="Save"
									className="fad fa-save me-3 fs-4"
									style={{ cursor: "pointer" }}
									onClick={saveAll}></i>
								<i
									title="Discard"
									className="fad fa-file-times me-sm-3 text-danger fs-4 no-filter"
									style={{ cursor: "pointer" }}
									onClick={resetAll}></i>
							</>
						) : (
							<>
								<i
									title="Edit"
									className="fad fa-pencil-alt me-3 fs-5"
									style={{ cursor: "pointer" }}
									onClick={() => setEdit(true)}></i>
								<i
									title="Delete"
									className="fad fa-trash-alt  me-sm-3 text-danger fs-5 no-filter"
									style={{ cursor: "pointer" }}
									data-bs-toggle="modal"
									data-bs-target="#confirmDelete"></i>
							</>
						)}
					</div>
				) : (
					<div className="p-4"></div>
				)}

				<div id="details" className="container-md">
					<div className="row">
						{Object.keys(details).map(detail => {
							return (
								<div key={detail} className="col-sm-6 contact-detail my-1 my-sm-2">
									<div className="row">
										<div className="col-md-4 col-2 text-end">
											<div className="d-flex flex-row-reverse align-items-center h-100">
												{CdIconList[detail]}
											</div>
										</div>
										<div className="col-md-8 col-10 text-break">
											<ContentEditable
												html={details[detail]}
												placeholder={
													detail[0].toUpperCase() + detail.slice(1)
												}
												name={detail}
												onChange={e => {
													let target =
														e.currentTarget.attributes.name.value;
													let value = e.currentTarget.innerText;
													changeHandler(target, value, true);
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
			<div
				className="modal fade"
				id="confirmDelete"
				tabIndex="-1"
				aria-labelledby="ModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="ModalLabel">
								Delete Contact
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Are you sure you want to delete the contact?
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-bs-dismiss="modal"
								onClick={Delete}>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactDetails;
