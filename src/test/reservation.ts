import { createAppTester } from 'zapier-platform-core';
import * as should from 'should';
import * as nock from 'nock';

import App from '../index';

const appTester = createAppTester(App);
/*
    TESTS
    At least one passenger
    All passenger lists have same lengths
*/

describe('Reservation Creates', () => {
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
});