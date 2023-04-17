const express = require("express");
const router = express.Router();
const Job = require("./job.schema");
const {
  getJobById,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("./job.services");

router.get("/", async (req, res) => {
  try {
    const jobs = await getAllJobs();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id",async (req, res) => {
  try {
    const job = await getJobById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const jobData = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      department: req.body.department,
      type: req.body.type,
      walletAddress: req.body.walletAddress,
    };
    if (
      !jobData.title ||
      !jobData.description ||
      !jobData.location ||
      !jobData.department ||
      !jobData.type ||
      !jobData.walletAddress
    ) {
      res.status(400).json({ message: "Please fill all fields" });
    }
    console.log(jobData);
    const job = await createJob(jobData);

    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const jobData = await getJobById(req.params.id);
  if (!jobData) {
    res.status(404).json({ message: "Bounty not found" });
  }
  if (req.body.title) {
    jobData.title = req.body.title;
  }
  if (req.body.description) {
    jobData.description = req.body.description;
  }
  if (req.body.location) {
    jobData.location = req.body.location;
  }
  if (req.body.department) {
    jobData.department = req.body.department;
  }
  if (req.body.type) {
    jobData.type = req.body.type;
  }
  if (req.body.walletAddress) {
    jobData.walletAddress = req.body.walletAddress;
  }

  try {
    const updatedJob = await updateJob(req.params.id, jobData);
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const job = await deleteJob(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
