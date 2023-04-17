
import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar.js"
import ListCards from "./ListCards/ListCards.js"
import ListDetails from "./ListCards/ListDetails.js"
import LandingNavbar from"./Navbar/LandingNavbar.js"
import Landing from "./Landing/Landing.js"
import Sidebar from "./Sidebar/Sidebar.js"
import PaysalEarnLanding from "./Landing/PaysalEarnLanding.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/> } />
        <Route path="/ListCards" element={ <ListCards/> } />
        <Route path="/ListDetails" element={ <ListDetails/> } />
        <Route path="/LandingNavbar" element={ <LandingNavbar/> } />
        <Route path="/Landing" element={ <Landing/> } />
        <Route path="/Sidebar" element={ <Sidebar/> } />
        <Route path="/PaysalEarnLanding" element={ <PaysalEarnLanding/> } />
        
      </Routes>
    </div>
  )
}

export default App