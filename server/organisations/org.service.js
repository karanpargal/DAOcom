const Organisation = require("./org.schema");

async function getAllOrgs() {
  try {
    const orgs = await Organisation.find();
    return orgs;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getOrgById(id) {
  try {
    const org = await Organisation.findById(id);
    return org;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function createOrg(orgData) {
  const { error } = Organisation.validate(orgData);
  if (error) {
    throw new Error(error.message);
  }

  const org = new Organisation(orgData);

  try {
    const newOrg = await org.save();
    return newOrg;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateOrg(id, orgData) {
  try {
    const org = await Organisation.findById(id);
    if (!org) {
      throw new Error("Organisation not found");
    }
    Object.assign(org, orgData);
    const updatedOrg = await org.save();
    return updatedOrg;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteOrg(id) {
  try {
    const org = await Organisation.findById(id);
    if (!org) {
      throw new Error("Organisation not found");
    }
    await org.deleteOne();
    return { message: "Organisation deleted" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getAllOrgs,
  getOrgById,
  createOrg,
  updateOrg,
  deleteOrg,
};
