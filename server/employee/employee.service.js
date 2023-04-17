const Employee = require("./employee.schema");

async function getAllEmployees() {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getEmployeeById(id) {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getEmployeeByDepartment(department) {
  try {
    const employee = await Employee.find({"department": department});
    
    return employee;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function createEmployee(employeeData) {
  const { error } = Employee.validate(employeeData);
  if (error) {
    throw new Error(error.message);
  }

  const employee = new Employee(employeeData);

  try {
    const newEmployee = await employee.save();
    return newEmployee;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateEmployee(id, employeeData) {
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    Object.assign(employee, employeeData);
    const updatedEmployee = await employee.save();
    return updatedEmployee;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteEmployee(id) {
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    await employee.deleteOne();
    return { message: "Employee deleted" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeeByDepartment,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};