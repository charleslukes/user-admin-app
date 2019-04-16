const {DB} = require('./user')


describe('Database to be an array of objects', () => {
    it('Should be defined', () => {
        expect(DB).toBeDefined();
    })
    it('Should be an array ', () => {
        expect(DB).toEqual(expect.arrayContaining(DB))
    })
})