const {DB} = require('./user');

/**
 * The Admin has access to the database from the user part.
 */
function Admin(name){
    this.name = name;
}

Admin.prototype.readAll = function(){
    return DB;
}

const admin = new Admin('Uche');
console.log(admin.readAll());
//console.log(DB);

module.exports = Admin;