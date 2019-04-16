const {DB, createUser} = require('./user')


describe('Database of the user', () => {
    it('Should be defined', () => {
        expect(DB).toBeDefined();
    })
    it('Should be an array ', () => {
        expect(DB).toEqual(expect.arrayContaining(DB))
    })
})

describe('The create user function ', () => {
    it('Should be defined ', () => {
        expect(createUser('xyz', 'xyz', 'xyz')).toBeDefined();
    })
})