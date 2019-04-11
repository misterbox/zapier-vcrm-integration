import { Passenger } from "./models/passenger";
import { ZObject } from "zapier-platform-core";

const buildPassengers = (passengerDataString: string, z?: ZObject): Passenger[] => {
    let passengers: Passenger[] = [];
    const passengerData: any[] = JSON.parse(passengerDataString);

    if (z) {
        z.console.log('Passenger data: ', passengerData);
    }

    for (const passenger of passengerData) {
        const processedPassenger = buildPassenger(passenger);
        passengers.push(processedPassenger);
    }

    return passengers;
};

const buildPassenger = (passengerData: any): Passenger => {
    const passenger: Passenger = {
        PrimaryPass: 'N',
        FirstName: matchPassengerData(passengerData, /first_name/i, true, 'First Name'),
        MiddleName: matchPassengerData(passengerData, /middle_name/i),
        LastName: matchPassengerData(passengerData, /last_name/i, true, 'Last Name'),
        Gender: matchPassengerData(passengerData, /gender/i),
        DOB: matchPassengerData(passengerData, /birth_date/i),
        Email: matchPassengerData(passengerData, /e_?mail(_address)?/i),
        Street: matchPassengerData(passengerData, /street(_address)?/i),
        City: matchPassengerData(passengerData, /city/i),
        Zip: matchPassengerData(passengerData, /zipcode/i),
        Phone1: matchPassengerData(passengerData, /phone_?number/i),
        PassportExp: matchPassengerData(passengerData, /passport_expiration(_date)?/i, true, 'Passport Expiration Date'),
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

const Utilities = {
    buildPassenger: buildPassenger,
    buildPassengers: buildPassengers,
    matchPassengerData: matchPassengerData
};

export default Utilities;