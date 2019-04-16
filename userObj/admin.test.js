const DB = require('./DB')
const admin = require('./admin');

describe('Admin Test', () => {
    it('Should return the admin name in an object ', () => {
        expect(admin).toEqual({name: 'Uche'});
    });
})

describe('Admin test methods', () => {
    it('Read All should return the values in the array', () => {
        expect(admin.readAll()).toEqual(DB);
    })
})