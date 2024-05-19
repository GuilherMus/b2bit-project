import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import LogoutButton from './LogoutButton';
import './App.css';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }
      try {
        const response = {
          data: {
            email: 'cliente@youdrive.com',
          }
        };
        setProfile(response.data);
      } catch (error) {
        navigate('/');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-color">
      <div className="form-wrapper">
        <h1 className="login-title">Profile</h1>
        <p>Email: {profile.email}</p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Profile;
