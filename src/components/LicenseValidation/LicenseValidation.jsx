import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, Alert, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import logoLight from '../assets/infinityX.png';
import ParticlesAuth from '../Authorization-inner/ParticlesAuth';

const LicenseValidation = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Initial loading state
  const [showPassword, setShowPassword] = useState(false); // State for show/hide password

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'https://api5.codeplayers.in/api/authentication/authenticate',
        { Username, Password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { token, subscriberID } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('licenseGuid', subscriberID);
      navigate('/CompanySelection');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const socialResponse = (platform) => {
    console.log(`Social login with ${platform}`);
  };

  useEffect(() => {
    document.title = "Infinity-X | CODEPLAYERS Business System Private Limited";
  }, []);

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                  
                      <img src={logoLight} alt="" height="81" />
                      {/* <h1 className="text-description"></h1> */}
                    
                  </div>
                  
                </div>
              </Col>
            </Row>


            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome</h5>
                      <p className="text-muted">Login in to continue with Infinity-x</p>
                    </div>
                    {error && <Alert color="danger">{error}</Alert>}
                    <div className="p-2 mt-4">
                      <Form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">Email</Label>
                          <Input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email or phone number"
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                          </div>
                          <Label className="form-label" htmlFor="password-input">Password</Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                              type={showPassword ? "text" : "password"}
                              className="form-control form-control-lg holder"
                              placeholder="Password"
                              value={Password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none"
                              onClick={() => setShowPassword(!showPassword)}
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </div>

                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                          <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                        </div>

                        <div className="mt-4">
                          <Button
                            color="success"
                            disabled={loading}
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            {loading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : "Log In"}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default LicenseValidation;
