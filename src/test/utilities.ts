import * as should from 'should';

import Utilities from '../utilities';
import { Passenger } from '../models/passenger';

describe('Utilities', () => {
    describe('buildPassengers', () => {
        it('should combine passenger data in to expected models', () => {
            const passenger1_isPrimary = 'Y';
            const passenger1_firstName = 'Rick';
            const passenger1_lastName = 'Sanchez';
            const passenger1_gender = 'M';
            const passenger1_dateOfBirth = '01/01/1989';
            const passenger1_email = 'rick.sanchez@ump.ump';
            const passenger1_street = '123 street';
            const passenger1_city = 'seattle';
            const passenger1_zip = '75098';
            const passenger1_phone = '2141234567';
            const passenger1_passportExp = '01/01/2021';

            const passenger2_isPrimary = 'N';
            const passenger2_firstName = 'Summer';
            const passenger2_lastName = 'Smith';
            const passenger2_gender = 'F';
            const passenger2_dateOfBirth = '01/01/1999';
            const passenger2_email = 'summer.smith@ump.ump';
            const passenger2_street = '123 street';
            const passenger2_city = 'seattle';
            const passenger2_zip = '75098';
            const passenger2_phone = '9998675309';
            const passenger2_passportExp = '01/01/2022';

            const passengerLists = {
                is_primary_passenger: [passenger1_isPrimary, passenger2_isPrimary],
                first_name: [passenger1_firstName, passenger2_firstName],
                last_name: [passenger1_lastName, passenger2_lastName],
                gender: [passenger1_gender, passenger2_gender],
                date_of_birth: [passenger1_dateOfBirth, passenger2_dateOfBirth],
                email: [passenger1_email, passenger2_email],
                street_address: [passenger1_street, passenger2_street],
                city: [passenger1_city, passenger2_city],
                zip_code: [passenger1_zip, passenger2_zip],
                phone_number: [passenger1_phone, passenger2_phone],
                passport_expiration: [passenger1_passportExp, passenger2_passportExp]
            };
            const expectedPassenger1: Passenger = {
                PrimaryPass: passenger1_isPrimary,
                FirstName: passenger1_firstName,
                LastName: passenger1_lastName,
                Gender: passenger1_gender,
                DOB: passenger1_dateOfBirth,
                Email: passenger1_email,
                Street: passenger1_street,
                City: passenger1_city,
                Zip: passenger1_zip,
                Phone1: passenger1_phone,
                PassportExp: passenger1_passportExp
            };
            const expectedPassenger2: Passenger = {
                PrimaryPass: passenger2_isPrimary,
                FirstName: passenger2_firstName,
                LastName: passenger2_lastName,
                Gender: passenger2_gender,
                DOB: passenger2_dateOfBirth,
                Email: passenger2_email,
                Street: passenger2_street,
                City: passenger2_city,
                Zip: passenger2_zip,
                Phone1: passenger2_phone,
                PassportExp: passenger2_passportExp
            };

            const passengers: Passenger[] = Utilities.BuildPassengers(passengerLists);

            should(passengers[0]).deepEqual(expectedPassenger1);
            should(passengers[1]).deepEqual(expectedPassenger2);
        });
    });
});