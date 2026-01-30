import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Activities from "./components/Activities";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">OctoFit</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/activities">Activities</Link>
          <Link className="nav-link" to="/teams">Teams</Link>
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/workouts">Workouts</Link>
          <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
