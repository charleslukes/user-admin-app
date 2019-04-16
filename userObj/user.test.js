const {DB} = require('./user')


describe('Database to be an array of objects', () => {
    it('Should be an array', () => {
        expect(DB).toBeDefined();
    })
})