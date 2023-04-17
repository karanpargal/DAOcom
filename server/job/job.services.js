const Job = require("./job.schema");

async function getAllJobs() {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getJobById(id) {
  try {
    const job = await Job.findById(id);
    return job;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function createJob(jobData) {
  const { error } = Job.validate(jobData);
  if (error) {
    throw new Error(error.message);
  }

  const job = new Job(jobData);

  try {
    const newJob = await job.save();
    return newJob;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateJob(id, jobData) {
  try {
    const job = await Job.findById(id);
    if (!job) {
      throw new Error("Job not found");
    }
    Object.assign(job, jobData);
    const updatedJob = await job.save();
    return updatedJob;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteJob(id) {
  try {
    const job = await Job.findById(id);
    if (!job) {
      throw new Error("Job not found");
    }
    await job.deleteOne();
    return { message: "Job deleted" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};