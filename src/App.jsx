import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Header from '../components/Header'
import About from "./Pages/About"

function App() {
 

  return (
  <Router>
    <Header></Header>
<Routes>
  <Route  path="/about" element={<About/>}/>
</Routes>
  </Router>
  )
}

export default App
