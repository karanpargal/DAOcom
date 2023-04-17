const Grant = require("./grant.schema");

async function getAllGrants() {
  try {
    const grants = await Grant.find();
    return grants;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getGrantById(id) {
  try {
    const grant = await Grant.findById(id);
    return grant;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function createGrant(grantData) {
  const { error } = Grant.validate(grantData);
  if (error) {
    throw new Error(error.message);
  }

  const grant = new Grant(grantData);

  try {
    const newGrant = await grant.save();
    return newGrant;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateGrant(id, grantData) {
  try {
    const grant = await Grant.findById(id);
    if (!grant) {
      throw new Error("Bounty not found");
    }
    Object.assign(grant, grantData);
    const updatedGrant = await grant.save();
    return updatedGrant;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteGrant(id) {
  try {
    const grant = await Grant.findById(id);
    if (!grant) {
      throw new Error("Grant not found");
    }
    await grant.deleteOne();
    return { message: "Grant deleted" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getAllGrants,
  getGrantById,
  createGrant,
  updateGrant,
  deleteGrant,
};