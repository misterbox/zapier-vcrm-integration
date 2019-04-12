import { ZObject } from "zapier-platform-core";
import * as moment from "moment";

import { Passenger } from "./models/passenger";

const buildPassengers = (passengerDataString: string): Passenger[] => {
    let passengers: Passenger[] = [];
    const passengerData: any[] = JSON.parse(passengerDataString);

    for (const passenger of passengerData) {
        const processedPassenger = buildPassenger(passenger);
        passengers.push(processedPassenger);
    }

    validatePassengers(passengers);

    return passengers;
};

const buildPassenger = (passengerData: any): Passenger => {
    const passenger: Passenger = {
        PrimaryPass: 'N',
        FirstName: matchPassengerData(passengerData, /first_name/i, true, 'First Name'),
        MiddleName: matchPassengerData(passengerData, /middle_name/i),
        LastName: matchPassengerData(passengerData, /last_name/i, true, 'Last Name'),
        Gender: matchPassengerData(passengerData, /gender/i),
        DOB: formatDate(matchPassengerData(passengerData, /birth_date/i)),
        Email: matchPassengerData(passengerData, /e_?mail(_address)?/i),
        Street: matchPassengerData(passengerData, /street(_address)?/i),
        City: matchPassengerData(passengerData, /city/i),
        Zip: matchPassengerData(passengerData, /zipcode/i),
        Phone1: matchPassengerData(passengerData, /phone_?number/i),
        PassportExp: formatDate(matchPassengerData(passengerData, /passport_expiration(_date)?/i, true, 'Passport Expiration Date')),
        FreqNumber: matchPassengerData(passengerData, /frequent_flyer_number/i),
        SeatingPref: matchPassengerData(passengerData, /seating_preference/i)
    };

    return passenger;
};

const matchPassengerData = (passengerData: any, regex: RegExp, required: boolean = false, propertyName?: string): string => {
    let result: string = '';

    for (const property in passengerData) {
        if (passengerData.hasOwnProperty(property)
            && regex.test(property)) {
            result = passengerData[property];
            
        }
    }

    if (required && !result.length) {
        const failureMessage = `Could not find ${propertyName} in passenger data. Aborting.`;
        throw new Error(failureMessage);
    }

    return result;
};

const validatePassengers = (passengers: Passenger[]): void => {
    if (passengers.length < 1) {
        throw new Error('At least 1 passenger is required!');
    }

    if (passengers.length > 10) {
        throw new Error('A maximum of 10 passengers is required!');
    }

    passengers[0].PrimaryPass = 'Y';
};

const formatDate = (date: string): string => {
    const parsedDate: moment.Moment = moment(date);

    if (parsedDate.isValid()) {
        return parsedDate.format('MM/DD/YYYY');
    }
    else if (!date.length) {
        return '';
    }

    throw new Error(`Unable to parse provided date: ${date}`);
};

const Utilities = {
    buildPassenger: buildPassenger,
    buildPassengers: buildPassengers,
    formatDate: formatDate,
    matchPassengerData: matchPassengerData,
    validatePassengers: validatePassengers
};

export default Utilities;