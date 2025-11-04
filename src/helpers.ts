export async function fetchApi(action: string, method: string, data?: any, callback?: Function) {
	const fdata: any = {
		method: method,
	};
	if (data) {
		fdata.headers = {
			"Content-Type": "application/json",
		};
		fdata.body = JSON.stringify(data);
	}
	let res = await fetch(action, fdata);
	let jdata = await res.json();
	if (callback) callback(jdata);

	return jdata;
}
