const express = require("express");
const app = express();
const client = require("./utils/db");
const bodyParser = require("body-parser");
const employeeRouter = require("./employee/employee.routes");
const orgRouter = require("./organisations/org.routes");
const bountyRouter = require("./bounty/bounty.routes");
const grantRouter = require("./grant/grant.routes");
const jobRouter = require("./job/job.routes");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000","https://daocom-a703d9.spheron.app/"]
  })
);

app.use("/employees", employeeRouter);
app.use("/orgs", orgRouter);
app.use("/bounties", bountyRouter);
app.use("/grants", grantRouter);
app.use("/jobs", jobRouter);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
