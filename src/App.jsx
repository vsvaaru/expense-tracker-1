import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
// import{ useState,useeffect } from "react";
// import { UserSidebar } from "./components/layouts/UserSidebar";

// import './App.css'
import "./assets/css/adminlte.css"
import"./assets/css/adminlte.min.css"
// import { UserNavbar } from './components/layouts/UserNavbar'
// import { Route,Routes } from "react-router-dom";
// import { UserSidebar } from "./components/layouts/UserSidebar"
// import { Login } from "./components/common/login";
// import { Signup } from "./components/comon/Signup";
// import { AgencySidebar } from "./components/layouts/AgencySidebar";
// import { AddScreen } from "./components/agency/AddScreen";
// import { User } from './components/layout/User'
// import { AddTransaction } from './components/user/AddTransaction'
import axios from "axios";
import "./assets/adminlte.css";
import "./assets/adminlte.min.css";


function App() {
  //axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.baseURL = "http://localhost:3000";

  // const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://localhost:3000"
const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
  // <body class="layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open">
  //   <div className="app-wrapper">
  //     <Routes>
  //       <Route path='/login' element = {<Login/>}></Route>
  //       <Route path='/signup' element = {<Signup/>}></Route>
  //       <Route path='/user' element = {<UserSidebar/>}></Route>
  //       {/* <Route path='addtransaction' element={<AddTransaction/>}></Route> */}
  //      {/* <Route path="/*" element={<User/>}></Route> // This is the default route */}
  //      <Route path ="/agency" element = {<AgencySidebar/>}>
  //      <Route path ="addscreen" element = {<AddScreen/>}></Route>
  //      </Route>
  //     </Routes> 
  //   </div>
  // </body>
<div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserSidebar />}>
        </Route>
        <Route path="/agency" element={<AgencySidebar />}>
          <Route path="addscreen" element={<AddScreen />} />
        </Route>
      </Routes>
    </div>
  );
}


  

export default App;