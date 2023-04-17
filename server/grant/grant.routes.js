const express = require("express");
const router = express.Router();
const Grant = require("./grant.schema");
const {
  getGrantById,
  getAllGrants,
  createGrant,
  updateGrant,
  deleteGrant,
} = require("./grant.services");

router.get("/", async (req, res) => {
  try {
    const grants = await getAllGrants();
    res.json(grants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const grant = getGrantById(req.params.id);
    res.json(grant);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const grantData = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      amount: req.body.amount,
      walletAddress: req.body.walletAddress,
    };
    if (
      !grantData.title ||
      !grantData.description ||
      !grantData.deadline ||
      !grantData.amount ||
      !grantData.walletAddress
    ) {
      res.status(400).json({ message: "Please fill all fields" });
    }
    const bounty = await createGrant(grantData);

    res.status(201).json(bounty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const grantData = await getGrantById(req.params.id);
  if (!grantData) {
    res.status(404).json({ message: "Grant not found" });
  }
  if (req.body.title) {
    grantData.title = req.body.title;
  }
  if (req.body.description) {
    grantData.description = req.body.description;
  }
  if (req.body.deadline) {
    grantData.rewards = req.body.deadline;
  }
  if (req.body.amount) {
    grantData.tags = req.body.amount;
  }
  if (req.body.walletAddress) {
    grantData.walletAddress = req.body.walletAddress;
  }


  try {
    const updatedGrant = await updateGrant(req.params.id, grantData);
    res.json(updatedGrant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const grant = await deleteGrant(req.params.id);
    res.json(grant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;