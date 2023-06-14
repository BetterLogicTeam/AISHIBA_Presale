import React, { useEffect, useState } from "react";
import "./Header.css";
import logo_web from "../../assets/logo_web.png";
import ai_logo from "../../assets/ai_footer.svg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const navbar = document.getElementById('navbar');

// Function to handle scroll event
function handleScroll() {
  // Check if the user has scrolled beyond a certain threshold (e.g., 100px)
  if (window.scrollY > 60) {
    // Add the 'scrolled' class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class from the navbar
    navbar.classList.remove('scrolled');
  }
}

// Attach the scroll event listener

function Header() {
  const [first, setfirst] = useState(true)
  
  const handleResize=()=>{
    if(window.innerWidth<1100){
      setfirst(false)
      console.log("Check");
    }else{
      setfirst(true)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
   window.addEventListener("resize",handleResize)
  })

 
  
  return (
    <>
      {[first].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 nav_main" id="navbar">
          <Container fluid>
            <Navbar.Brand href="/"><img src={logo_web} width='190' alt="" className="brand-logo_refrst"/>
                  <img className="brand-logo_res" src={ai_logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* <img className="brand-logo" width="75" src={ai_logo} alt="" /> */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 ps-5">
                  <Nav.Link href="#Platform" className="header_ka">Platform</Nav.Link>
                  <Nav.Link href="#ai-Token" className="header_ka">$AI Token</Nav.Link>
                  <Nav.Link href="#how-to-buy" className="header_ka">How To Buy</Nav.Link>
                  <Nav.Link href="#roadmap" className="header_ka">Roadmap</Nav.Link>
                  <Nav.Link href="#airdrop" className="header_ka">Airdrop</Nav.Link>
                  <Nav.Link href="#faq" className="header_ka">FAQ</Nav.Link>
                  <NavDropdown
                    title="Language"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="language"
                  >
                    <NavDropdown.Item href="#action3">Arabic</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Englisg</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Chinese</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Czech</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Dutch</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">French</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">German</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Hungarian</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Japanese</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Korean
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
