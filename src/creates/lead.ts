import { ZObject, Bundle, HttpResponse } from "zapier-platform-core";
import * as moment from 'moment';

import Constants from "../constants";

const createLead = async (z: ZObject, bundle: Bundle | any) => {
    const departureDate: moment.Moment = moment(bundle.inputData.departure_date);
    const response: HttpResponse = await z.request(`${Constants.API_BASE}/PostLead`, {
        method: 'POST',
        body: {
            AdultCnt: bundle.inputData.num_of_adults,
            Budget: bundle.inputData.budget,
            DepCity: `${bundle.inputData.departure_city}`,
            DepCountry: `${bundle.inputData.departure_country}`,
            DepartureDate: `${departureDate.format('MM/DD/YYYY')}`,
            Destination: `${bundle.inputData.destination}`,
            Nights: `${bundle.inputData.num_of_nights}`,
            OtherQuestion: `${bundle.inputData.comments}`,
            PrimaryAgent: bundle.inputData.agent_id,
            ReferredBy: `${bundle.inputData.referred_by}`,
            ResortType: `${bundle.inputData.resort_type}`,
            RoomType: `${bundle.inputData.room_type}`,
            SpecialRequest: `${bundle.inputData.special_request}`,
            udf_lead1: `${bundle.inputData.method_of_communication}`,
            VacationType: `${bundle.inputData.vacation_type}`,
            Passengers: [
                {
                    PrimaryPass: 'Y',
                    FirstName: `${bundle.inputData.first_name}`,
                    MiddleName: `${bundle.inputData.middle_name}`,
                    LastName: `${bundle.inputData.last_name}`,
                    Email: `${bundle.inputData.email_address}`,
                    Phone1: `${bundle.inputData.phone_number}`
                }
            ]
        },
        removeMissingValuesFrom: {
            params: true,
            body: true
        }
    });

    return {
        result: response.content
    };
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
            required: false,
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
            required: false,
            type: 'integer',
            helpText: 'Number of nights for the trip'
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
            required: false,
            type: 'number'
        },
        {
            key: 'first_name',
            label: 'Lead First Name',
            required: true,
            type: 'string'
        },
        {
            key: 'middle_name',
            label: 'Lead Middle Name',
            required: false,
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
        },
        {
            key: 'method_of_communication',
            label: 'Preferred Method of Communication',
            required: false,
            type: 'string'
        },
        {
            key: 'comments',
            label: 'Comments',
            required: false,
            type: 'string'
        },
        {
            key: 'referred_by',
            label: 'Referred By',
            required: false,
            type: 'string'
        }
    ],
    perform: createLead
 }
};

export default Lead;