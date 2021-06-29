import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from 'react-bootstrap';
import { logout } from '../../actions/userActions';

const Header = ({ setSearch }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Todo App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={ (e) => setSearch(e.target.value) }
              />
            </Form>
          </Nav>

          <Nav
            className="mr-auto my-2 my-lg-0"
            style={ { maxHeight: '100px' } }
            navbarScroll
          >
            <Nav.Link>
              <Link to="/mynotes">
                My notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Rodolfo Wolff" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={ logoutHandler }>
                Logout
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
