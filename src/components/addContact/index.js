import altImg from "../img/user-alt.png";

const AddContact = () => {
	return (
		<div
			id="AddContact"
			className="flex m-auto rounded px-sm-4 py-sm-5 p-4"
			style={{
				minWidth: "320px",
				maxWidth: "500px",
				width: "70%",
				boxShadow: "0 0 10px #bbb",
			}}>
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
		</div>
	);
};

export default AddContact;
