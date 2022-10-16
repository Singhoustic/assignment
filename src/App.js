import '../src/index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page from './components/Page';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Earning from './components/pages/Earning';
import Projects from './components/pages/Projects';
import Tickets from './components/pages/Tickets';
import { useState } from 'react';
function App() {
  const [sidebarPadding, setSidebarPadding] = useState("70px");
  return (
    <>
      <Navbar title="User" />
      <BrowserRouter>
        <div className='content'>

          <Sidebar setPadding={setSidebarPadding} />
          <div className='main'
            style={{
              marginLeft: sidebarPadding,
              marginTop: "50px"
            }}
          >

            <Routes>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/project' element={<Projects />} />
              <Route exact path='/earning' element={<Earning />} />
              <Route exact path='/tickets' element={<Tickets />} />
              <Route
                path="*"
                element={<Navigate to="/home" replace />}
              />
              {/* </Outlet> */}
            </Routes >

          </div>
        </div>

      </BrowserRouter >
    </>
  );
}

export default App;
