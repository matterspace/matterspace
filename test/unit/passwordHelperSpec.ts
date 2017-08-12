import {assert} from 'chai';
import * as passwordHelper from '../../src/server/passwordHelper';

describe('fieldValidationHelper', () => {
    describe('validate', () => {
        it('When the passed password is valid', async () => {
            const password = await passwordHelper.generateHashPassword('this-is-my-password');
            const passwordsMatch = await passwordHelper.verifyPassword('this-is-my-password', password);
            assert.isTrue(passwordsMatch);
        });
        it('When the passed password is not valid', async () => {
            const password = await passwordHelper.generateHashPassword('this-is-my-password');
            const passwordsMatch = await passwordHelper.verifyPassword('this-is-my-password-2', password);
            assert.isFalse(passwordsMatch);
        });
    });
});
