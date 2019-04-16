# SIMPLE USER AND ADMIN APP

## ABOUT

 This is a simple User and Admin prototype which basically in which users and admin can has their own abilities. The user can register is details, update his detatils and can also view his details. The admin can basically do all what the users can do and even more.

 ## Admin Abilities 

 The Admin is designed to also access the database which is an array of objects. These objects are not obvious as they are only available on the console or node terminal. The admin can:  
 1. Access a user
 2. Access all user
 3. Search for a specific user
 4. Delete a user
 5. Delete all users  

## Testing 
The test framework used for this project was jest. Well described and several case scenerio tested. 
An example is:
```
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
```
Above tests to ensure the Database is available and also went futher to check for some values. 

### Contributions
Contribution to this work will be highly appreciated check on the test cases and see how you can 
make things better or even include newer features.






        