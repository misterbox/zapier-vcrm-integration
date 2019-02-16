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
    if (bundle.authData.api_key) {
        request.params = request.params || {};
        request.params.apikey = bundle.authData.api_key;
    }

    return request;
};

const Middleware = {
    AddApiKey: addApiKey,
    HandleHttpError: handleHttpError
};

export default Middleware;