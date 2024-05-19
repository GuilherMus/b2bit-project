import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return <button onClick={handleLogout} className="button">Logout</button>;
};

export default LogoutButton;
