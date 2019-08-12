import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import SpaceXCompanyInfo from './components/SpaceXCompanyInfo'
import PastLaunches from './components/PastLaunches'
import UpcomingLaunches from './components/UpcomingLaunches'
import RocketsInfo from './components/RocketsInfo'
import LaunchPadsInfo from './components/LaunchPadsInfo'

import './App.css'

const Links = () => (
  <nav className='main-nav'>
    <NavLink exact activeClassName="active" to="/">
      Info
    </NavLink>
    <NavLink activeClassName="active" to="/past">
      Past Launches
    </NavLink>
    <NavLink activeClassName="active" to="/upcoming">
      Upcoming Launches
    </NavLink>
    <NavLink activeClassName="active" to="/rocket">
      Rocket Info
    </NavLink>
    <NavLink activeClassName="active" to="/launchpad">
      Launchpad Info
    </NavLink>
  </nav>
);

function App() {
	return (
		<div className="App">
      <Router>
        <header>
          <nav>
            <h1>SpaceX Info Browser</h1>
            <hr />
            <div>
              <Links />
            </div>
          </nav>
        </header>
        <div className="main-content">
          <Route 
            exact path="/"
            render={() => <SpaceXCompanyInfo />}
          />
          <Route 
            exact path="/past"
            render={() => <PastLaunches />}
          />
          <Route
            exact path="/upcoming"
            render={() => <UpcomingLaunches />}
          />
          <Route
            exact path="/rocket"
            render={() => <RocketsInfo />}
          />
          <Route
            exact path="/launchpad"
            render={() => <LaunchPadsInfo />}
          />
        </div>
      </Router>
		</div>
	)
}

export default App
