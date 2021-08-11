const scheme = "http";
const domain = "localhost";
const port = "8000";
const path = "api/v1/contacts";

const ApiURL = `${scheme}://${domain}:${port}/${path}`;
const headers = { "Content-Type": "application/json" };

const RestCall = async (method, body) => {
	return fetch(ApiURL, {
		method,
		headers,
		body,
	}).then(response => response.json());
};

export default RestCall;
