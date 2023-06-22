import React, { useEffect, useState } from "react";
import "./Header.css";
import logo_web from "../../assets/logo.png";
import ai_logo from "../../assets/ai_footer.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";



// Attach the scroll event listener

function Header() {
  const [first, setfirst] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', changeNavbarBg);

    return () => {
      window.removeEventListener('scroll', changeNavbarBg);
    };
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setfirst(false);
      console.log("Check");
    } else {
      setfirst(true);
    }
  };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
       className={navbarBg ? 'navbar-bg mb-3 nav_main' : 'navbar-transparent mb-3 nav_main'}
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="#home" className="shfkfnwjfn">
            <img
              src={logo_web}
              // width="190"
              alt=""
              className="brand-logo_refrst  hhh_logog"
            />
            <img className="brand-logo_res" src={logo_web} alt="" href="#about" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-5 ps-5">
              {/* <Nav.Link href="#home" className="header_ka">
                Platform
              </Nav.Link> */}
              <Nav.Link href="#about" className="header_ka">
                About Us
              </Nav.Link>
              <Nav.Link href="#tokenomics" className="header_ka">
              Tokenomics
              </Nav.Link>
              <Nav.Link href="#roadmap" className="header_ka">
                Roadmap
              </Nav.Link>
              <Nav.Link href="#team" className="header_ka">
                Team
              </Nav.Link>
              <Nav.Link href="#faq" className="header_ka">
                FAQ
              </Nav.Link>

              {/* <select
                className="language"
                value={selectedValue}
                onChange={handleChange}
              >
                <option value="">English</option>
                <option value="Chinese">Chinese</option>
                <option value="Czech">Czech</option>
                <option value="Dutch">Dutch</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
              </select> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
