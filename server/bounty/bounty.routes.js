const express = require("express");
const router = express.Router();
const Bounty = require("./bounty.schema");
const {
  getBountyById,
  getAllBounties,
  createBounty,
  updateBounty,
  deleteBounty,
} = require("./bounty.service");

router.get("/", async (req, res) => {
  try {
    const bounties = await getAllBounties();
    res.json(bounties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const bounty = getBountiesById(req.params.id);
    res.json(bounty);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const bountyData = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      rewards: req.body.rewards,
      tags: req.body.tags,
      walletAddress: req.body.walletAddress,
    };
    if (
      !bountyData.title ||
      !bountyData.description ||
      !bountyData.deadline ||
      !bountyData.rewards ||
      !bountyData.tags ||
      !bountyData.walletAddress
    ) {
      res.status(400).json({ message: "Please fill all fields" });
    }
    const bounty = await createBounty(bountyData);

    res.status(201).json(bounty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const bountyData = await getBountyById(req.params.id);
  if (!bountyData) {
    res.status(404).json({ message: "Bounty not found" });
  }
  if (req.body.title) {
    bountyData.name = req.body.title;
  }
  if (req.body.description) {
    bountyData.description = req.body.description;
  }
  if (req.body.rewards) {
    bountyData.rewards = req.body.rewards;
  }
  if (req.body.deadline) {
    bountyData.deadline = req.body.deadline;
  }
  if (req.body.tags) {
    bountyData.tags = req.body.tags;
  }
  if (req.body.walletAddress) {
    bountyData.walletAddress = req.body.walletAddress;
  }


  try {
    const updatedBounty = await updateBounty(req.params.id, bountyData);
    res.json(updatedBounty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bounty = await deleteBounty(req.params.id);
    res.json(bounty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;