const {DB, createUser, user} = require('./user')

let userTest;

describe('Database of the user', () => {
    it('Should be defined', () => {
        expect(DB).toBeDefined();
    });
    it('Should be an array ', () => {
        expect(DB).toEqual(expect.arrayContaining(DB))
    });
    it('Should be an array of objects', () => {
        expect(DB[0].name).toMatch(/charles/i)
    })
})

describe('Create user function ', () => {
    it('Should be defined ', () => {
        expect(createUser).toBeDefined();
    });
    it('Should accepts name as its arguments', () => {
       userTest = new createUser('Charles', 'chiakwa', 'enugu');
        expect(userTest.name).toMatch(/charles/i)
    });
    it('Should be invalid for anything else than string', () => {
       userTest = new createUser(123, true, NaN);
        expect(userTest.name).toBeUndefined();
        expect(userTest.surname).toBeUndefined();
        expect(userTest.state).toBeUndefined();
    })
})