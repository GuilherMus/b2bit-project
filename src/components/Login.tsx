import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import Logo from './Logo.png';
import './App.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '#1d395d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '9px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };


  return (
    <div className="bg-color">
      <Container maxWidth="sm" >
        <div className="form-wrapper">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                if (values.email === 'cliente@youdrive.com' && values.password === 'password') {
                  const response = {
                    data: {
                      access_token: 'fake-jwt-token'
                    }
                  };
                  localStorage.setItem('token', response.data.access_token);
                  navigate('/profile');
                } else {
                  throw new Error('Invalid email or password');
                }
              } catch (error) {
                setErrors({ password: 'Invalid email or password' });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <Form>
              <div className="input-field">
                <label htmlFor="email" className="form-label">Email</label>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  inputProps={{ style: { borderRadius: '9px' } }}
                />
                <ErrorMessage name="email" component="div" className="error-msg" />
              </div>

              <div className="input-field">
                <label htmlFor="password" className="form-label">Password</label>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  inputProps={{ style: { borderRadius: '9px' } }}
                />
                <ErrorMessage name="password" component="div" className="error-msg" />
              </div>

              <Button className="submit-button" type="submit" fullWidth variant="contained" style={buttonStyle}>Sign In</Button>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default Login;
