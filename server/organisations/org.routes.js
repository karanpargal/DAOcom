const express = require("express");
const router = express.Router();
const Organisation = require("./org.schema");
const {
  getAllOrgs,
  getOrgById,
  createOrg,
  updateOrg,
  deleteOrg,
} = require("./org.service");

router.get("/", async (req, res) => {
  try {
    const orgs = await getAllOrgs();
    res.json(orgs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const org = getOrgById(req.params.id);
    res.json(org);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const orgData = {
      name: req.body.name,
      industry: req.body.industry,
      email: req.body.email,
      walletAddress: req.body.walletAddress,
    };
    if (
      !orgData.name ||
      !orgData.industry ||
      !orgData.email ||
      !orgData.walletAddress
    ) {
      res.status(400).json({ message: "Please fill all fields" });
    }
    const org = await createOrg(orgData);

    res.status(201).json(org);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const orgData = await getOrgById(req.params.id);
  if (!orgData) {
    res.status(404).json({ message: "Organisation not found" });
  }
  const updatedOrg = await updateOrg(req.params.id, req.body);
  res.json(updatedOrg);
});

router.delete("/:id", async (req, res) => {
  const orgData = await getOrgById(req.params.id);
  if (!orgData) {
    res.status(404).json({ message: "Organisation not found" });
  }
  await deleteOrg(req.params.id);
  res.json({ message: "Organisation deleted" });
});

module.exports = router;