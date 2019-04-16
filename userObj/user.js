
//Defining the user database

const DB = [];

//Creating the user constructor 
function createUser(name, surname, state){
    if(typeof name === 'string' && typeof surname === 'string' && typeof state === 'string'){
    this.name = name;
    this.surname = surname;
    this.state = state;

    //Store added values to the DataBase
    const store = {};
    store.name = name;
    store.surname = surname;
    store.state = state;

    DB.push(store);
   }
}

const user = new createUser('Charles', 'Chiakwa', 'Enugu');

module.exports = {
    DB: DB,
    createUser: createUser,
    user: user
}