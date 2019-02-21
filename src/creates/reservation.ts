const Reservation = {
 key: 'reservation',
 noun: 'Reservation',
 display: {
     label: 'Create Reservation',
     description: 'Create a reservation in VCRM'
 },
 operation: {
     inputFields: [
        {
            key: 'agent_id',
            label: 'Primary Agent ID',
            required: true,
            dynamic: 'agent.id.name',
            altersDynamicFields: true
        },
        {
            key: 'reminder_text',
            label: 'Reminder Text',
            required: true,
            type: 'string'
        },
        {
            key: 'wants_insurance',
            label: 'Include Insurance',
            required: true,
            type: 'boolean'
        },
        {
            key: 'wants_airfair',
            label: 'Include Airfare',
            required: true,
            type: 'boolean'
        },
        {
            key: 'departure_date',
            label: 'Departure Date',
            required: false,
            type: 'datetime'
        },
        {
            key: 'departure_city',
            label: 'Departure City',
            required: false,
            type: 'string'
        },
        {
            key: 'return_date',
            label: 'Return Date',
            required: false,
            type: 'datetime'
        },
        {
            key: 'return_city',
            label: 'Return City',
            required: false,
            type: 'string'
        },
        {
            key: 'bedding_type',
            label: 'Bedding Type',
            required: false,
            choices: ['King', 'Double Queen']
        },
        {
            key: 'passenger_list',
            label: 'Passenger List',
            required: true,
            children: [
                {
                    key: 'first_name',
                    label: 'First Name',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'gender',
                    label: 'Gender',
                    required: true,
                    choices: ['M', 'F'],
                    list: true
                }
            ]
        },
     ],
     perform: () => {}
 }
};

export default Reservation;