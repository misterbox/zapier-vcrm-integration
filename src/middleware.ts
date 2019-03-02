import { HttpResponse, ZObject, Bundle } from "zapier-platform-core";

const handleHttpError = (response: HttpResponse, z: ZObject) => {
    if (response.status >= 400) {
        z.console.log(`Status: ${response.status}`);
        z.console.log(`Content: ${response.content}`);
        z.console.log(`Request: ${JSON.stringify(response.request)}`);

        throw new Error(`Got an unexpected response from VCRM API: ${response.content}`);
    }

    return response;
};

const addApiKey = (request: any, z: ZObject, bundle: Bundle) => {
    const api_key = process.env.API_KEY || bundle.authData.api_key;

    if (api_key) {
        if (request.method === 'GET') {
            request.params = request.params || {};
            request.params.apikey = api_key;
        }
        else if (request.method === 'POST') {
            const requestBody = z.JSON.parse(request.body);
            requestBody.ApiKey = api_key;
            request.body = z.JSON.stringify(requestBody);
        }
    }

    return request;
};

const Middleware = {
    AddApiKey: addApiKey,
    HandleHttpError: handleHttpError
};

export default Middleware;