import altImg from "../img/user-alt.png";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "../css/addContact.css";

const AddContact = () => {
	return (
		<div id="AddContactContainer" className="h-100 pt-sm-4 overflow-hidden">
			<SimpleBar id="AddContact" className="h-100 m-auto rounded pb-sm-5 pb-4">
				<div
					className="d-flex w-100 mb-3 text-center position-sticky sticky-top"
					style={{ background: "#438cf955", backdropFilter: "blur(10px)" }}>
					<div className="flex-fill p-3 text-success">
						<i className="fas fa-check"></i> Save
					</div>
					<div className="flex-fill p-3 text-danger">
						<i className="fas fa-times"></i> Discard
					</div>
				</div>
				<div className="text-center">
					<form>
						<div>
							<img
								src={altImg}
								alt="no-img"
								width="100px"
								height="100px"
								className="rounded-circle"
							/>
							<br />
							<input
								type="text"
								placeholder="Name"
								name="name"
								className="mt-3 shadow-none border-0 rounded p-2"
								style={{ outline: "none" }}
							/>
						</div>
						<hr />
						<div className="container">
							<div className="row">
								<div className="w-100">
									<input
										type="text"
										placeholder="Phone"
										className="form-control"
										required></input>
									<input
										type="text"
										placeholder="Email"
										className="form-control"></input>
									<input
										type="text"
										placeholder="Website"
										className="form-control"></input>
									<textarea
										type="text"
										placeholder="Address"
										className="form-control"
										rows="4"
										style={{ resize: "none" }}></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
			</SimpleBar>
		</div>
	);
};

export default AddContact;
