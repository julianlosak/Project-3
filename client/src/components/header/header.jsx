import React from "react";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pidgeeLogo from '../../assets/Pidgee-Logo.png';
import searchIcon from '../../assets/search.png';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="rounded custom-color">
                <Container>
                    <img src={pidgeeLogo} alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#favorites">Favorites</Nav.Link>
                            <Nav.Link href="#logout">Logout</Nav.Link>

                          {Auth.loggedIn() ? (
            <>
              <span>Start chatting, {Auth.getUser().data.username}!</span>
              <button className="btn btn-md btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Nav.Link className="" href="/login">
                Login
              </Nav.Link>
            </>
          )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container>
                    <InputGroup className="search-icon d-flex align-items-right">
                        <FormControl
                            type="text"
                            name="searchTerm"
                            placeholder="Search for chats..."
                            className="mr-sm-2"
                        />
                        <Button type="submit" className=" btn-light">
                            <img src={searchIcon} alt="" />
                        </Button>
                    </InputGroup>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
