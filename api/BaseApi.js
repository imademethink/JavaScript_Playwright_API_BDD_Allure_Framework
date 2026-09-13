
export class BaseApi {
    request;

    constructor(request) {
        this.request = request;
    }

    printRequest(method, url, headers, body) {
        console.log(`    Method: ${method}`);
        console.log(`    Url: ${url}`);
        console.log(`    Headers: ${JSON.stringify(headers, null, 2)}`);
        console.log(`    Body: ${JSON.stringify(body, null, 2)}`);
    }

    async readJson(response) {
        return await response.json();
    }
}
