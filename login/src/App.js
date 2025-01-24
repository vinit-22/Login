import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login Form/Login";
import Registration from "./Components/Registration Form/Registration";
// import Navbar from "./Components/NavBar/Navbar";
import Navbar2 from "./Components/Navbar 2/Navbar2";

// import { useState } from "react";
// import Header from './Components/Header/Header'
// import Sidebar from './Components/Header/Sidebar'
// import Home from './Components/Header/Home'

function App() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };

  return (
    <Router>
     <div className='grid-container'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login " element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/nav2" element={<Navbar2/>} />

        {/* <Route path="/header" element ={<Header OpenSidebar={OpenSidebar} />}/>
        <Route path="/sidebar" element ={<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>}/>
        <Route path="/home" element ={<Home />}/> */}
       
      </Routes>
      </div>
    </Router>
  );
}

export default App;

