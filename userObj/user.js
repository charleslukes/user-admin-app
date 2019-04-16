
//Defining the user database

const DB = require('./DB');

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

//Read the single user by ID
createUser.prototype.readById = function(id){
    if(typeof id === 'number'){
        return DB[id];
    }
    else{
        return 'Invalid User Id';
    }
}

//Update details of a user upadate
createUser.prototype.updateUser = function(id, name, surname, state){
    if(typeof name === 'string' && typeof surname === 'string' && typeof state === 'string'){
        DB[id].name = name;
        DB[id].surname = surname;
        DB[id].state = state;
    }
}



const user = new createUser('Charles', 'Chiakwa', 'Enugu');

module.exports = {
    DB: DB,
    createUser: createUser,
    user: user
}