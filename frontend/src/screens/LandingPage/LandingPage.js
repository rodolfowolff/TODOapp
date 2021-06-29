import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import "./LandingPage.css";

const LandingPage = () => {

  // useEffectect(() => {
  //   const userInfo = localStorage.getItem('userInfo');

  //   if (userInfo) {
  //     history.push('/mynotes');
  //   }
  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Landing Page</h1>
              <p className="subtitle">One safe place for all</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-secondary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
