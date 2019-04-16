const {DB, createUser} = require('./user');

/**
 * The Admin has access to the database from the user part.
 */
function Admin(name){
    this.name = name;
}
Admin.prototype = Object.create(createUser.prototype);
Admin.constructor = Admin;

//Read all User
Admin.prototype.readAll = function(){
    return DB;
}

//Delete a User
Admin.prototype.delUser = function(id){
    if(typeof id === 'number'){
        return DB.splice(id, 1);
    }
    else{
        return 'Invalid input'
    }
}

//Delete all user
Admin.prototype.delAll = function(){
     DB.splice(0, DB.length);
     return DB;
}


const admin = new Admin('Uche');
//console.log(admin.readAll());
//console.log(Admin.prototype.readById(0))
//admin.delAll()
console.log(DB);
module.exports = admin;