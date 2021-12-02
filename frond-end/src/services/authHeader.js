export default function authHeaderAdmin() {
	const token = JSON.parse(sessionStorage.getItem('infoAdmin'));
	if (token) {
		return {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token
		}
	} else {
		return {}
	}
}