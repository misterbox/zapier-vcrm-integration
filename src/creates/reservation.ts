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
            default: 'No',
            choices: ['Yes', 'No']
        },
        {
            key: 'wants_airfare',
            label: 'Include Airfare',
            required: true,
            default: 'No',
            choices: ['Yes', 'No']
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
                    key: 'is_primary_passenger',
                    label: 'Primary Passenger?',
                    required: true,
                    choices: ['Y', 'N'],
                    default: 'N',
                    list: true
                },
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
                },
                {
                    key: 'date_of_birth',
                    label: 'Date of Birth',
                    required: true,
                    type: 'datetime',
                    list: true
                },
                {
                    key: 'email',
                    label: 'Email Address',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'phone_number',
                    label: 'Phone Number',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'street_address',
                    label: 'Street Address',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'city',
                    label: 'City',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'state',
                    label: 'State',
                    required: true,
                    type: 'string',
                    list: true
                },
                {
                    key: 'zip_code',
                    label: 'Zip Code',
                    required: true,
                    type: 'integer',
                    list: true
                },
                {
                    key: 'passport_expiration',
                    label: 'Passport Expiration',
                    required: true,
                    type: 'datetime',
                    list: true
                },
            ]
        },
     ],
     perform: () => {}
 }
};

export default Reservation;