const employeeModal = require('../models/employeeModel')

const getAllEmployee = async (request,response)=>{
    const employee = await employeeModal.find()
    try{
        response.status(201).json(employee)
    }
    catch(error)
    {
        response.status(500).json({errorMessage : error.message})
    }
}

const createAEmployee = async (request,response)=>{
    const employee = new employeeModal({
        name : request.body.name,
        employeeId : request.body.employeeId,
        age : request.body.employeeId

    })
    try{
        const newEmployee = await employee.save()
        response.status(201).json(newEmployee)
    }
    catch(error){
        response.status(500).json({errorMessage : error.message})
    }
}

const getAEmployee = (request, response)=>{

    response.status(201).json(response.employe)
}

const updateAEmployee = async (request,response)=>{
    if(request.body.name)
    {
        response.employe.name = request.body.name
    }

    if(request.body.age)
    {
        response.employe.age = request.body.age
    }

    if(request.body.employeeId)
    {
        response.employe.employeeId = request.body.employeeId
    }
    try{
        const updatedEmployee = await response.employe.save()
        response.status(200).json(updatedEmployee)
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }
    
}

// const deleteAEmployee = await (request,response)=>{

// }

async function getEmployeeBYId(request,response,next)
{
    let employe 
    try{
        employe = await employeeModal.findById(request.params.id)
        if(employe == null)
        {
            return response.status(500).json({message : error.message})
        }

    }
    catch(error){
        return response.status(500).json({message : error.message})
    }

    response.employe = employe 
    next()
}


module.exports = {
    getAllEmployee,
    createAEmployee,
    getAEmployee,
    updateAEmployee,
    getEmployeeBYId
}