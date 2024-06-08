import React from 'react'
import hLogo from '../../../images/hlogo.png'
import { Col, Container, Row, Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    const pages = useSelector((state) => state.pages.pages)
    
    return (
        <div className='site-header'>
            <Navbar expand="lg" className='site-navigation'>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/dr-liana"><img src={hLogo} alt='header logo' /></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="my-2 my-lg-0 align-items-center" navbarScroll>
                            { pages.length > 0 ? pages?.map((page, index) => {
                                // const {  } = page
                                if (page.slug !== 'home') {
                                    const originalString = page.title.rendered
                                    const replaceTitle = originalString.replace(/&amp;/g, '&');
                                    return (
                                        <NavLink key={page.id} className={`${index == 1 ? "btn btn-contact" : "nav-link"}`} to={page.slug}>{replaceTitle}</NavLink>
                                    )
                                }
                            }) : `server not connected`}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header