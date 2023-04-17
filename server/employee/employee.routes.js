const express = require("express");
const router = express.Router();
const Employee = require("./employee.schema");
const {
  getEmployeeById,
  getEmployeeByDepartment,
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./employee.service");

router.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:department", async (req, res) => {
  try {
    const employee = await getEmployeeByDepartment(req.params.department);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const employeeData = {
      name: req.body.name,
      department: req.body.department,
      email: req.body.email,
      walletAddress: req.body.walletAddress,
      orgId: req.body.orgId,
    };
    if (
      !employeeData.name ||
      !employeeData.department ||
      !employeeData.email ||
      !employeeData.walletAddress ||
      !employeeData.orgId
    ) {
      res.status(400).json({ message: "Please fill all fields" });
    }
    const employee = await createEmployee(employeeData);

    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const employeeData = await getEmployeeById(req.params.id);
  if (!employeeData) {
    res.status(404).json({ message: "Employee not found" });
  }
  if (req.body.name) {
    employeeData.name = req.body.name;
  }
  if (req.body.department) {
    employeeData.department = req.body.department;
  }
  if (req.body.email) {
    employeeData.email = req.body.email;
  }
  if (req.body.walletAddress) {
    employeeData.walletAddress = req.body.walletAddress;
  }
  if (req.body.orgId) {
    employeeData.orgId = req.body.orgId;
  }


  try {
    const updatedEmployee = await updateEmployee(req.params.id, employeeData);
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const employee = await deleteEmployee(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;