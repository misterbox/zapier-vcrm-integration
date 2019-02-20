const { version } = require("../package.json");
import { version as platformVersion } from "zapier-platform-core";

import Authentication from "./authentication";
import Middleware from './middleware';
import Lead from "./creates/lead";
import Agent from "./creates/agent";

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

  resources: {},

  triggers: {
    [Agent.key]: Agent
  },

  searches: {},

  creates: {
    [Lead.key]: Lead
  }
};

export default App;
