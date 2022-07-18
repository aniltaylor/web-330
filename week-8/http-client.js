
export class HttpClient {
    async get(url, params = '') {
        let url = new URL(url);

        let params = new URLSearchParams(params);
        url.search = params

        const res = await fetch(url.toString(), {
            method: "GET",
        })

        return res.json();
    }
