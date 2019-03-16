import { ZObject, Bundle, HttpResponse } from "zapier-platform-core";
import Constants from "../constants";
import { Passenger } from "../models/passenger";
import Utilities from "../utilities";

const createReservation = async (z: ZObject, bundle: Bundle | any) => {
    validateInputData(bundle);
    const passengers: Passenger[] = Utilities.BuildPassengers(bundle.inputData.passenger_list);

    const response: HttpResponse = await z.request(`${Constants.API_BASE}/PostRequest`, {
        method: 'POST',
        body: {
            Airfare: `${bundle.inputData.wants_airfare}`,
            Bedding: `${bundle.inputData.bedding_type}`,
            DepartureDate: `${bundle.inputData.departure_date}`,
            DepartureLocation: `${bundle.inputData.departure_location}`,
            Insurance: `${bundle.inputData.wants_insurance}`,
            PrimaryAgent: bundle.inputData.agent_id,
            ReminderText: `${bundle.inputData.reminder_text}`,
            ReturnDate: `${bundle.inputData.return_date}`,
            RoomType: `${bundle.inputData.room_type}`,
            SpecialRequest: `${bundle.inputData.special_request}`,
            Passengers: passengers
        }
    });

    return JSON.parse(response.content);
};

const validateInputData = (bundle: Bundle) => {
    let inputData = bundle.inputData;
    let passengerList = inputData.passenger_list;
    let passengerListProps = Object.keys(passengerList);

    let allListsHaveItems = true;

    passengerListProps.forEach((property: string) => {
        if (passengerList[property].length < 1) {
            allListsHaveItems = false;
        }
    });

    if (!allListsHaveItems) {
        throw new Error('At least one passenger is required');
    }
};

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
            key: 'departure_location',
            label: 'Departure Location',
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
            key: 'bedding_type',
            label: 'Bedding Type',
            required: false,
            choices: ['King', 'Double Queen']
        },
        {
            key: 'room_type',
            label: 'Room Type',
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
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'middle_name',
                    label: 'Middle Name',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'gender',
                    label: 'Gender',
                    required: false,
                    choices: ['M', 'F'],
                    list: true
                },
                {
                    key: 'date_of_birth',
                    label: 'Date of Birth',
                    required: false,
                    type: 'datetime',
                    list: true
                },
                {
                    key: 'email',
                    label: 'Email Address',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'phone_number',
                    label: 'Phone Number',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'street_address',
                    label: 'Street Address',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'city',
                    label: 'City',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'zip_code',
                    label: 'Zip Code',
                    required: false,
                    type: 'integer',
                    list: true
                },
                {
                    key: 'passport_expiration',
                    label: 'Passport Expiration',
                    required: false,
                    type: 'datetime',
                    list: true
                },
                {
                    key: 'frequent_flyer_number',
                    label: 'Frequent Flyer Number',
                    required: false,
                    type: 'string',
                    list: true
                },
                {
                    key: 'seating_preference',
                    label: 'Flight Seating Preference',
                    required: false,
                    type: 'string',
                    list: true
                }
            ]
        },
     ],
     perform: createReservation
 }
};

export default Reservation;