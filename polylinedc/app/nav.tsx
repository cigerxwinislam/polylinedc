// Bismillahirahmanirahim

"use client"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Polyline Dc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/kurumsal">About </Nav.Link>
            <NavDropdown title="Artificial Intelligence " id="basic-nav-dropdown">
              <NavDropdown.Item href="/jiriyacekiri/">Image Processing</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                
             Object Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              
              Audio/Sound Processing</NavDropdown.Item>

              <NavDropdown.Item href="hizmetler/uygulama">
              
              
              
              
              
              Natural Language Processing
              </NavDropdown.Item>
            </NavDropdown>






            <NavDropdown title="Web Sites & Apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/"> Personal</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Blog Sites
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Social Media </NavDropdown.Item>
            


            
              <NavDropdown.Item href="hizmetler/uygulama">
              E Commerce</NavDropdown.Item>
            </NavDropdown>


    
            <NavDropdown title="Mobile Apps " id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Android </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Ios 
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Cross Platform</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Robotics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Arduino</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Rasberry pi
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Auto</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Courses & Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Android </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Web 
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
             Machne Learning   </NavDropdown.Item>

              
              <NavDropdown.Item href="hizmetler/uygulama">
              Robotics</NavDropdown.Item>
            


            
              <NavDropdown.Item href="hizmetler/uygulama">
              Siber Security</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/iletisim">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;