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
    // const passenger: Passenger = {
    //     PrimaryPass: 'N',
    //     FirstName: matchPassengerData(passengerData, /first_name/i, 'First Name'),
    //     MiddleName: matchPassengerData(passengerData, /middle_name/i),
    //     LastName: matchPassengerData(passengerData, /last_name/i, 'Last Name'),
    //     Gender: passenger1_gender,
    //     DOB: passenger1_dateOfBirth,
    //     Email: passenger1_email,
    //     Street: passenger1_street,
    //     City: passenger1_city,
    //     Zip: passenger1_zip,
    //     Phone1: passenger1_phone,
    //     PassportExp: passenger1_passportExp,
    //     FreqNumber: passenger1_frequent_flyer_number,
    //     SeatingPref: passenger1_seating_preference
    // };

    // return passenger;
    return {} as Passenger;
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