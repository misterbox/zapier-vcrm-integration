import Authentication from "./authentication";
import Middleware from './middleware';
const { version } = require("../package.json");
import { version as platformVersion } from "zapier-platform-core";

const App = {
  version,
  platformVersion,

  authentication: Authentication,

  beforeRequest: [
    Middleware.AddApiKey
  ],

  afterResponse: [
    Middleware.HandleHttpError
  ],

  resources: {
  },

  triggers: {},

  searches: {},

  creates: {}
};

export default App;
