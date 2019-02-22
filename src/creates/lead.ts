import { ZObject, Bundle, HttpResponse } from "zapier-platform-core";
import Constants from "../constants";

const createLead = async (z: ZObject, bundle: Bundle | any) => {
    const response: HttpResponse = await z.request(`${Constants.API_BASE}/PostLead`, {
        method: 'POST',
        body: {
            PrimaryAgent: bundle.inputFields.agent_id,
            Destination: `${bundle.inputFields.destination}`,
            DepartureDate: `${bundle.inputFields.departure_date}`,
            ResortType: `${bundle.inputFields.resort_type}`,
            SpecialRequest: `${bundle.inputFields.special_request}`,
            DepCity: `${bundle.inputFields.departure_city}`,
            DepCountry: `${bundle.inputFields.departure_country}`,
            VacationType: `${bundle.inputFields.vacation_type}`,
            RoomType: `${bundle.inputFields.room_type}`,
            Nights: `${bundle.inputFields.num_of_nights}`,
            IsFlexible: `${bundle.inputFields.is_flexible}`,
            AdultCnt: bundle.inputFields.num_of_adults,
            Budget: bundle.inputFields.budget,
            Passengers: [
                {
                    PrimaryPass: 'Y',
                    FirstName: `${bundle.inputFields.first_name}`,
                    LastName: `${bundle.inputFields.last_name}`,
                    Email: `${bundle.inputFields.email_address}`,
                    Phone1: `${bundle.inputFields.phone_number}`
                }
            ]
        }
    });

    return response.content;
};

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
            dynamic: 'agent.id.name',
            altersDynamicFields: true
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
            key: 'special_request',
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
            label: 'Lead is flexible',
            required: true,
            choices: ['Y', 'N'],
            helpText: 'The provided lead answers are not strict requirements'
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
    perform: createLead
 }
};

export default Lead;