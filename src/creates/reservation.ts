import { ZObject, Bundle, HttpResponse } from "zapier-platform-core";
import Constants from "../constants";
import { Passenger } from "../models/passenger";
import Utilities from "../utilities";

const createReservation = async (z: ZObject, bundle: Bundle | any) => {
    const passengers: Passenger[] = Utilities.buildPassengers(bundle.inputData.passenger_data_string);

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
        },
        removeMissingValuesFrom: {
            params: true,
            body: true
        }
    });

    return JSON.parse(response.content);
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
            type: 'string'
        },
        {
            key: 'wants_airfare',
            label: 'Include Airfare',
            required: true,
            type: 'string'
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
            type: 'string'
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
            key: 'passenger_data_string',
            label: 'Passenger Data String',
            required: true,
            type: 'string'
        }
     ],
     perform: createReservation
 }
};

export default Reservation;