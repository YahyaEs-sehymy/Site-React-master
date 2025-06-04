
import React from "react";
import { useNavigate } from "react-router-dom";
import './css/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="divv">
      <button className="button" onClick={handleLogout}>Déconnecter</button>
      <h1 className="h1">Welcome to the Dashboard!</h1>
    </div>
  );
}

export default Dashboard;
