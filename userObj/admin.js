const {DB, createUser} = require('./user');

/**
 * The Admin has access to the database from the user part.
 */
function Admin(name){
    this.name = name;
}
Admin.prototype = Object.create(createUser.prototype);
Admin.constructor = Admin;
Admin.prototype.readAll = function(){
    return DB;
}

const admin = new Admin('Uche');
//console.log(admin.readAll());
//console.log(Admin.prototype.readById(0))
//console.log(DB);
module.exports = admin;