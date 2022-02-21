import React from 'react';
import { Button, Col, Container, Nav, Navbar,  NavbarBrand,  NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Features from './Features';
import Offer from './Offer';
import About from './About';

const Header = () => {
  return (
    <>
    <header>
        <Navbar fixed='top' collapseOnSelect expand="md" bg='dark' variant='dark'>
          <NavbarBrand href='/' style={{fontSize:30,letterSpacing:3,fontFamily:'verdana',fontWeight:900}}>
             Gym<b style={{color:'red'}}>.</b>
          </NavbarBrand>
          <NavbarToggle aria-controls='responsive-navbar-nav' />
          <NavbarCollapse id='responsive-navbar-nav justify-content-end'>
            <Nav className="w-100  d-flex justify-content-end"  id="nav">
              <NavLink href='/'>Home</NavLink>
              <NavLink href='#main'>Features</NavLink>
              <NavLink href='#about-div'>Offer</NavLink>
              <NavLink href='#offer'>Blog</NavLink>
              <NavLink href='#contact'>Contacts</NavLink>
            </Nav>
          </NavbarCollapse>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/features" element={<Features />} />
          <Route path="/offer" element={<About />} />
          <Route path="/about" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Container id='header-blok' className='text-white w-100 h-100 d-flex flex-column align-center text-center' style={{fontFamily:'verdana',fontWeight:900}}>
          <h3>Step Up Your</h3>
          <h1><b>Fitness</b> With Us</h1>
          <h6>Build Your Body And Fitness With Professional Touch</h6>
          <Col sm="12">
          <Button variant='danger' style={{
            width:130,
            height:45,
            backgroundColor:'red',
            textTransform:'uppercase',
            letterSpacing:2
            }} >Join us</Button>
          </Col>
      </Container>
    </header>
    </>
  )
}

export default Header
