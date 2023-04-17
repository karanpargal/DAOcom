import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import ListCards from "./ListCards/ListCards.js";
import ListDetails from "./ListCards/ListDetails.js";
import LandingNavbar from "./Navbar/LandingNavbar.js";
import Landing from "./Landing/Landing.js";
import Sidebar from "./Sidebar/Sidebar.js";
import PaysalEarnLanding from "./Landing/PaysalEarnLanding.js";
import BountyCards from "./Landing/BountyCards.js";
import BountyDetails from "./Landing/BountyDetails.js";
import GrantsDetails from "./GrantCards/GrantsDetails.js";
import GrantsCards from "./GrantCards/GrantsCards.js";
import JobCards from "./Landing/JobCards.js";
import JobDetails from "./Landing/JobDetails.js";
import PaysalEarnOrg from "./Landing/PaysalEarnOrg.js";
import AddBounty from "./Forms/AddBounty.js";
import AddJob from "./Forms/AddJobs.js";
import AddGrant from "./Forms/AddGrants.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/ListCards" element={<ListCards />} />
        <Route path="/ListDetails" element={<ListDetails />} />
        <Route path="/LandingNavbar" element={<LandingNavbar />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/PaysalEarnLanding" element={<PaysalEarnLanding />} />
        <Route path="/BountyCards" element={<BountyCards />} />
        <Route path="/BountyDetails" element={<BountyDetails />} />
        <Route path="/GrantsDetails" element={<GrantsDetails />} />
        <Route path="/GrantsCards" element={<GrantsCards />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/JobCards" element={<JobCards />} />
        <Route path="/PaysalEarnOrg" element={<PaysalEarnOrg />} />
        <Route path="/AddJob" element={<AddJob />} />
        <Route path="/AddBounty" element={<AddBounty />} />
        <Route path="/AddGrant" element={<AddGrant />} />
      </Routes>
    </div>
  );
}

export default App;
