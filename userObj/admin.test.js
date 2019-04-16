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
    });
})

describe('Admin test to delete a user', () => {
    it('Should delete a user by id', () => {
        expect(admin.delUser(1)).toBeDefined();
    });
    it('Should return invalid for wrong input', () => {
        expect(admin.delUser('xyz')).toBe('Invalid input')
    });
}) 

describe('Admin test to delete all users', () => {
    it('Should delete all users', () => {
        expect(admin.delAll()).toEqual([]);
    })
})
