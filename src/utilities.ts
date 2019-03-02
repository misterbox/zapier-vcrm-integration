import { Passenger } from "./models/passenger";

const buildPassengers = (passengerData: any): Passenger[] => {
    let passengers: Passenger[] = [];

    passengerData.first_name.map((item: any, index: number) => {
        passengers.push({
            Street: passengerData.street_address[index],
            City: passengerData.city[index],
            DOB: passengerData.date_of_birth[index],
            Email: passengerData.email[index],
            FirstName: passengerData.first_name[index],
            FreqNumber: passengerData.frequent_flyer_number[index],
            Gender: passengerData.gender[index],
            MiddleName: passengerData.middle_name[index],
            LastName: passengerData.last_name[index],
            Phone1: passengerData.phone_number[index],
            PassportExp: passengerData.passport_expiration[index],
            PrimaryPass: passengerData.is_primary_passenger[index],
            SeatingPref: passengerData.seating_preference[index],
            Zip: passengerData.zip_code[index]
        });
    });

    return passengers;
};

const Utilities = {
    BuildPassengers: buildPassengers
};

export default Utilities;