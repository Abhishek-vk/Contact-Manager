import RestCall from "./restCall";

class ContactServices {
	async getContactList() {
		const response = await RestCall("GET");
		return response;
	}

	async editContact(Body) {
		const body = JSON.stringify(Body);
		const response = await RestCall("PATCH", body);
		return response;
	}

	async deleteContact(id) {
		const response = await RestCall("DELETE", null, id);
		return response;
	}
}

export default new ContactServices();
