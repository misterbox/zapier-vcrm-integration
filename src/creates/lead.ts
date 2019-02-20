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
            required: true,
            type: 'string'
        },
        {
            key: 'destination',
            label: 'Destination',
            required: false,
            type: 'string'
        },
        {
            key: 'departure_date',
            label: 'Departure Date',
            required: true,
            type: 'datetime'
        },
        {
            key: 'resort_type',
            label: 'Resort Type',
            required: false,
            type: 'string'
        },
        {
            key: 'sepcial_request',
            label: 'Special Request',
            required: false,
            type: 'string'
        },
        {
            key: 'departure_city',
            label: 'Departure City',
            required: false,
            type: 'string'
        },
        {
            key: 'departure_country',
            label: 'Departure Country',
            required: false,
            type: 'string'
        },
        {
            key: 'vacation_type',
            label: 'Vacation Type',
            required: false,
            type: 'string'
        },
        {
            key: 'room_type',
            label: 'Room Type',
            required: false,
            type: 'string'
        },
        {
            key: 'num_of_nights',
            label: 'Trip Duration',
            required: true,
            type: 'integer',
            helpText: 'Number of nights for the trip'
        },
        {
            key: 'is_flexible',
            label: 'Lead is flexiable',
            required: true,
            type: 'string',
            helpText: 'The provided lead answers are not strict requiredments'
        },
        {
            key: 'num_of_adults',
            label: 'Number of Adults',
            required: true,
            type: 'integer'
        },
        {
            key: 'budget',
            label: 'Trip Budget',
            required: true,
            type: 'number'
        },
        {
            key: 'first_name',
            label: 'Lead First Name',
            required: true,
            type: 'string'
        },
        {
            key: 'last_name',
            label: 'Lead Last Name',
            required: true,
            type: 'string'
        },
        {
            key: 'email_address',
            label: 'Lead Email Address',
            required: true,
            type: 'string'
        },
        {
            key: 'phone_number',
            label: 'Lead Phone Number',
            required: true,
            type: 'string'
        }
    ],
    perform: () => {}
 }
};

export default Lead;