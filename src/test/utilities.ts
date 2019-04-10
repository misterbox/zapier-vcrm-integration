import * as should from 'should';

import Utilities from '../utilities';
import { Passenger } from '../models/passenger';

describe('Utilities', () => {
    describe('buildPassengers', () => {
        it('should combine passenger data in to expected models', () => {
            const passenger1_isPrimary = 'Y';
            const passenger1_firstName = 'Rick';
            const passenger1_middleName = 'Pickle';
            const passenger1_lastName = 'Sanchez';
            const passenger1_gender = 'M';
            const passenger1_dateOfBirth = '01/01/1989';
            const passenger1_email = 'rick.sanchez@ump.ump';
            const passenger1_street = '123 street';
            const passenger1_city = 'seattle';
            const passenger1_zip = '75098';
            const passenger1_phone = '2141234567';
            const passenger1_passportExp = '01/01/2021';
            const passenger1_frequent_flyer_number = '123456';
            const passenger1_seating_preference = 'window';

            const passenger2_isPrimary = 'N';
            const passenger2_firstName = 'Summer';
            const passenger2_middleName = 'Harlet';
            const passenger2_lastName = 'Smith';
            const passenger2_gender = 'F';
            const passenger2_dateOfBirth = '01/01/1999';
            const passenger2_email = 'summer.smith@ump.ump';
            const passenger2_street = '123 street';
            const passenger2_city = 'seattle';
            const passenger2_zip = '75098';
            const passenger2_phone = '9998675309';
            const passenger2_passportExp = '01/01/2022';
            const passenger2_frequent_flyer_number = '987654';
            const passenger2_seating_preference = 'aisle';

            const passengerLists = {
                is_primary_passenger: [passenger1_isPrimary, passenger2_isPrimary],
                first_name: [passenger1_firstName, passenger2_firstName],
                middle_name: [passenger1_middleName, passenger2_middleName],
                last_name: [passenger1_lastName, passenger2_lastName],
                gender: [passenger1_gender, passenger2_gender],
                date_of_birth: [passenger1_dateOfBirth, passenger2_dateOfBirth],
                email: [passenger1_email, passenger2_email],
                street_address: [passenger1_street, passenger2_street],
                city: [passenger1_city, passenger2_city],
                zip_code: [passenger1_zip, passenger2_zip],
                phone_number: [passenger1_phone, passenger2_phone],
                passport_expiration: [passenger1_passportExp, passenger2_passportExp],
                frequent_flyer_number: [passenger1_frequent_flyer_number, passenger2_frequent_flyer_number],
                seating_preference: [passenger1_seating_preference, passenger2_seating_preference]
            };
            const expectedPassenger1: Passenger = {
                PrimaryPass: passenger1_isPrimary,
                FirstName: passenger1_firstName,
                MiddleName: passenger1_middleName,
                LastName: passenger1_lastName,
                Gender: passenger1_gender,
                DOB: passenger1_dateOfBirth,
                Email: passenger1_email,
                Street: passenger1_street,
                City: passenger1_city,
                Zip: passenger1_zip,
                Phone1: passenger1_phone,
                PassportExp: passenger1_passportExp,
                FreqNumber: passenger1_frequent_flyer_number,
                SeatingPref: passenger1_seating_preference
            };
            const expectedPassenger2: Passenger = {
                PrimaryPass: passenger2_isPrimary,
                FirstName: passenger2_firstName,
                MiddleName: passenger2_middleName,
                LastName: passenger2_lastName,
                Gender: passenger2_gender,
                DOB: passenger2_dateOfBirth,
                Email: passenger2_email,
                Street: passenger2_street,
                City: passenger2_city,
                Zip: passenger2_zip,
                Phone1: passenger2_phone,
                PassportExp: passenger2_passportExp,
                FreqNumber: passenger2_frequent_flyer_number,
                SeatingPref: passenger2_seating_preference
            };

            // const passengers: Passenger[] = Utilities.buildPassengers(passengerLists);

            // should(passengers[0]).deepEqual(expectedPassenger1);
            // should(passengers[1]).deepEqual(expectedPassenger2);
        });
    });

    describe('buildPassenger', () => {
        it('should return expected email address given "e_mail_address" property name', () => {
            const emailAddressPropertyName = 'e_mail_address';
            const expectedEmailAddress = 'rick.sanchez@ump.ump';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [emailAddressPropertyName]: expectedEmailAddress
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Email).eql(expectedEmailAddress);
        });

        it('should return expected email address given "email_address" property name', () => {
            const emailAddressPropertyName = 'email_address';
            const expectedEmailAddress = 'rick.sanchez@ump.ump';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [emailAddressPropertyName]: expectedEmailAddress
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Email).eql(expectedEmailAddress);
        });

        it('should return expected email address given "email" property name', () => {
            const emailAddressPropertyName = 'email';
            const expectedEmailAddress = 'rick.sanchez@ump.ump';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [emailAddressPropertyName]: expectedEmailAddress
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Email).eql(expectedEmailAddress);
        });

        it('should return expected email address given "e_mail" property name', () => {
            const emailAddressPropertyName = 'e_mail';
            const expectedEmailAddress = 'rick.sanchez@ump.ump';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [emailAddressPropertyName]: expectedEmailAddress
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Email).eql(expectedEmailAddress);
        });

        it('should return expected phone number given "phone_number" property name', () => {
            const expectedPhoneNumberPropertyName = 'phone_number';
            const expectedPhoneNumber = '(123) 4567890';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [expectedPhoneNumberPropertyName]: expectedPhoneNumber
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Phone1).eql(expectedPhoneNumber);
        });

        it('should return expected phone number given "phonenumber" property name', () => {
            const expectedPhoneNumberPropertyName = 'phonenumber';
            const expectedPhoneNumber = '(123) 4567890';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': '04-10-2019',
                [expectedPhoneNumberPropertyName]: expectedPhoneNumber
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.Phone1).eql(expectedPhoneNumber);
        });

        it('should return expected passport expiration date given "passport_expiration_date" property name', () => {
            const expectedPassportExpirationPropertyName = 'passport_expiration_date';
            const expectedPassportExpirationDate = '04-10-2019';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                [expectedPassportExpirationPropertyName]: expectedPassportExpirationDate,
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.PassportExp).eql(expectedPassportExpirationDate);
        });

        it('should return expected passport expiration date given "passport_expiration', () => {
            const expectedPassportExpirationPropertyName = 'passport_expiration';
            const expectedPassportExpirationDate = '04-10-2019';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                [expectedPassportExpirationPropertyName]: expectedPassportExpirationDate,
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.PassportExp).eql(expectedPassportExpirationDate);
        });

        it('should return expected passenger', () => {
            const expectedFirstName = 'Rick';
            const expectedMiddleName = 'Squanch';
            const expectedLastName = 'Sanchez';
            const expectedGender = 'M';
            const expectedDateofBirth = '04-10-2019';
            const expectedEmail = 'rick@ump.ump';
            // const 
            const expectedPassportExpirationDate = '04-10-2019';
            const passengerData: any = {
                'first_name': 'Rick',
                'last_name': 'Sanchez',
                'passport_expiration_date': expectedPassportExpirationDate,
                'middle_name': expectedPassportExpirationDate,
            };

            const result: Passenger = Utilities.buildPassenger(passengerData);

            should(result.PassportExp).eql(expectedPassportExpirationDate);
        });
    });

    describe('matchPassengerData', () => {
        it('should throw error with expected message when required and match cannot be found', () => {
            const regex = /first_name/;
            const name = 'First Name';
            const expectedMessage = `Could not find ${name} in passenger data. Aborting.`;
            const passengerData: any = {};

            try {
                Utilities.matchPassengerData(passengerData, regex, true, name);
                should.fail(null, null, 'We should never get here');
            }
            catch (error) {
                should(error.message).containEql(expectedMessage);
            }
        });

        it('should return first name given passenger data with first name', () => {
            const regex = /first_name/i;
            const name = 'First Name';
            const expectedFirstName = 'Rick';
            const passengerData: any = {
                'Passenger_1_Last_Name': 'Sanchez',
                'Passenger_1_First_Name': expectedFirstName
            };

            const result = Utilities.matchPassengerData(passengerData, regex, true, name);

            should(result).eql(expectedFirstName);
        });
    });
});