const Bounty = require("./bounty.schema");

async function getAllBounties() {
  try {
    const bounties = await Bounty.find();
    return bounties;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getBountyById(id) {
  try {
    const bounty = await Bounty.findById(id);
    return bounty;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function createBounty(bountyData) {
  const { error } = Bounty.validate(bountyData);
  if (error) {
    throw new Error(error.message);
  }

  const bounty = new Bounty(bountyData);

  try {
    const newBounty = await bounty.save();
    return newBounty;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateBounty(id, bountyData) {
  try {
    const bounty = await Bounty.findById(id);
    if (!bounty) {
      throw new Error("Bounty not found");
    }
    Object.assign(bounty, bountyData);
    const updatedBounty = await bounty.save();
    return updatedBounty;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteBounty(id) {
  try {
    const bounty = await Bounty.findById(id);
    if (!bounty) {
      throw new Error("Bounty not found");
    }
    await bounty.deleteOne();
    return { message: "Bounty deleted" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getAllBounties,
  getBountyById,
  createBounty,
  updateBounty,
  deleteBounty,
};