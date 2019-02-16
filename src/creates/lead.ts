const Lead = {
 key: 'lead',
 noun: 'lead',
 display: {
    label: 'Create Lead',
    description: 'Create a lead in VCRM'
 },
 operation: {
    inputFields: [
        {
            key: 'agent_id',
            label: 'Primary Agent ID',
            require: true,
            type: 'string'
        },
    ]
 }
};

export default Lead;