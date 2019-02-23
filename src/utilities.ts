import { Passenger } from "./models/passenger";

const buildPassengers = (passengerData: any): Passenger[] => {
    let passengers: Passenger[] = [];

    passengerData.first_name.map((item: any, index: number) => {
        passengers.push({
            PrimaryPass: passengerData.is_primary_passenger[index],
            FirstName: passengerData.first_name[index],
            LastName: passengerData.last_name[index],
            Gender: passengerData.gender[index],
            DOB: passengerData.date_of_birth[index],
            Email: passengerData.email[index],
            Street: passengerData.street_address[index],
            City: passengerData.city[index],
            Zip: passengerData.zip_code[index],
            Phone1: passengerData.phone_number[index],
            PassportExp: passengerData.passport_expiration[index],
            SeatingPref: passengerData.seating_preference[index],
            FreqNumber: passengerData.frequent_flyer_number[index]
        });
    });

    return passengers;
};

const Utilities = {
    BuildPassengers: buildPassengers
};

export default Utilities;