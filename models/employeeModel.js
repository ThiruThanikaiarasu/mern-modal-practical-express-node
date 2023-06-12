const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema(
    {
    name : {
        type : String,
        required : true,
    },
    employeeId : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number,
        required : true,
    },
    
    },
    {
        collection : "employees"
    }
)

module.exports = mongoose.model('employees',employeeSchema)