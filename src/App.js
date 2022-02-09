import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "./app.css"

function App() {
  return (
    <Router >
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
