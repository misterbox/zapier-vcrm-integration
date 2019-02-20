import { ZObject, Bundle, HttpResponse } from "zapier-platform-core";

import Constants from "../constants";
import { Agent } from "../models/agent";

const queryAgents = async (z: ZObject, bundle: Bundle) => {
    const response: HttpResponse = await z.request(`${Constants.API_BASE}/getagents`, {
        method: 'GET'
    });
    let agents: any[] = [];

    if (response.json) {
        let agentsResponse: Agent[] = response.json as Agent[];

        agentsResponse.forEach((agent: Agent) => {
            agents.push({
                id: agent.Code,
                name: agent.FullName
            });
        });
    }

    return agents;
};

const Agent = {
    key: 'agent',
    noun: 'Agent',
    display: {
        label: 'List of Agents',
        description: 'This is a hidden trigger',
        hidden: true
    },
    operation: {
        perform: queryAgents
    }
};

export default Agent;