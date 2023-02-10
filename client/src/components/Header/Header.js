import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import "./headerCss.css";
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
      <header class="navbar-container">
        <Navbar className="py-1 navbar navbar" variant="dark" expand="lg">
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
                    <FontAwesomeIcon icon={faShoppingCart} className="fas"/><h7 className="fass">panier</h7>
                </Link>

              {userInfo ? <NavDropdown title={userInfo.name} id="username">
                
              <Link to="/orderhistory">
                <i>Historique des commandes</i>
              </Link>

                <NavDropdown.Item onClick={logoutHandler}>
                  Se déconnecter
                </NavDropdown.Item>

              </NavDropdown> :
              
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} className="fas"/><h7 className="fass">S'Authentifier</h7>
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