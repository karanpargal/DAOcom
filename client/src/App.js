
import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar.js"
import ListCards from "./ListCards/ListCards.js"
import ListDetails from "./ListCards/ListDetails.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/> } />
        <Route path="/ListCards" element={ <ListCards/> } />
        <Route path="/ListDetails" element={ <ListDetails/> } />

        
      </Routes>
    </div>
  )
}

export default App