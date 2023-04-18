import { Routes, Route } from "react-router-dom";
import ListDetails from "./ListCards/ListDetails.js";
import Landing from "./Landing/Landing.js";
import PaysalEarnLanding from "./Landing/PaysalEarnLanding.js";
import BountyDetails from "./Landing/BountyDetails.js";
import GrantsDetails from "./GrantCards/GrantsDetails.js";
import JobDetails from "./Landing/JobDetails.js";
import PaysalEarnOrg from "./Landing/PaysalEarnOrg.js";
import AddBounty from "./Forms/AddBounty.js";
import AddJobs from "./Forms/AddJobs.js";
import AddGrants from "./Forms/AddGrants.js";
import Dashboard from "./Dashboard/Dashboard.js";
import Contributors from "./Contributors/Contributors.js";

function App() {
  return (
    <div className="App bg-gradient-to-l from-violet-200 to-pink-200s h-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ListDetails" element={<ListDetails />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PaysalEarnLanding" element={<PaysalEarnLanding />} />
        <Route path="/BountyDetails" element={<BountyDetails />} />
        <Route path="/GrantsDetails" element={<GrantsDetails />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/PaysalEarnOrg" element={<PaysalEarnOrg />} />
        <Route path="/AddJobs" element={<AddJobs />} />
        <Route path="/AddBounty" element={<AddBounty />} />
        <Route path="/AddGrants" element={<AddGrants />} />
        <Route path="/contributor" element={<Contributors />} />

      </Routes>
    </div>
  );
}

export default App;
