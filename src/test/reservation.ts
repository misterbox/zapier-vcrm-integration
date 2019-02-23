import { createAppTester, tools } from 'zapier-platform-core';
import * as should from 'should';
import * as nock from 'nock';

import App from '../index';
import { Passenger } from '../models/passenger';
import Constants from '../constants';

const appTester = createAppTester(App);

describe('Reservation Creates', () => {
    describe('createReservation', () => {
        beforeEach(() => {
            tools.env.inject();
        });

        it('should throw an error if zero passengers are provided', async () => {
            const passengerList = {
                    is_primary_passenger: [],
                    first_name: [],
                    last_name: [],
                    gender: [],
                    date_of_birth: [],
                    email: [],
                    phone_number: [],
                    street_address: [],
                    city: [],
                    state: [],
                    zip_code: [],
                    passport_expiration: []
            };
            const bundle = {
                inputData: {
                    passenger_list: passengerList
                }
            };

            try {
                await appTester(App.creates.reservation.operation.perform, bundle);
                should.fail(null, null, 'We should never get here');
            }
            catch (error) {
                should(error.message).containEql('At least one passenger is required');
            }
        });

        it('should throw an error if passenger data lists are not the same length', async () => {
            const passengerList = {
                    is_primary_passenger: [{}],
                    first_name: [{}],
                    last_name: [{}],
                    gender: [{}],
                    date_of_birth: [{}],
                    email: [{}],
                    phone_number: [{}],
                    street_address: [{}, {}],
                    city: [{}],
                    state: [{}],
                    zip_code: [{}],
                    passport_expiration: [{}]
            };
            const bundle = {
                inputData: {
                    passenger_list: passengerList
                }
            };

            try {
                await appTester(App.creates.reservation.operation.perform, bundle);
                should.fail(null, null, 'We should never get here');
            }
            catch (error) {
                should(error.message).containEql('Passenger info lists must be the same length');
            }
        });

        it('should POST to VCRM API with expected payload', async () => {
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
            const bundle = {
                inputData: {
                    passenger_list: passengerLists
                }
            };

            nock(Constants.API_BASE)
                .post(`/PostRequest`, (body: any) => {
                    const passengers: Passenger[] = body.Passengers as Passenger[];
                    should(passengers[0]).deepEqual(expectedPassenger1);
                    should(passengers[1]).deepEqual(expectedPassenger2);

                    return true;
                })
                .query((query: any) => {
                    return query.apikey === process.env.API_KEY;
                })
                .reply(200, {});

            const response = await appTester(App.creates.reservation.operation.perform, bundle);
        });
    });
});