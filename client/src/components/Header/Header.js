import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import headercsr from "./headerCss.css";
import { logout } from '../../redux/actions/userActions';
import logo from '../../images/logo.png';


const Header = () => {
  const user= useSelector(state => state.user)
  const dispatch= useDispatch()
  const userInfo= user.userInfo;
  const logoutHandler= ()=> {
    dispatch(logout())
  }
    return (
      <header>
        <Navbar className="py-1 navbar navbar" variant="dark"  expand="lg">
          <Container>
          <Link to="/">
          <Navbar.Brand>
              <img
                alt="logo"
                src={logo}
                height="60"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" >
                
                <Link to="/cart">
                    <i className="fas fa-cart-shopping">Cart</i> 
                </Link>

              {userInfo ? <NavDropdown title={userInfo.name} id="username">
                
              <Link to="/orderhistory">
              <NavDropdown.Item >Order History</NavDropdown.Item>
              </Link>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>

              </NavDropdown> :
              
                <Link to="/login">
                  <i className="fas fa-user">Sign In</i> 
                </Link>
              }
        </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
    </header>
    );
};

export default Header;