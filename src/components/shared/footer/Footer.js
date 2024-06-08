import React from 'react'
import fLogo from '../../../images/flogo.png'
import { Col, Container, Row, Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='site-footer'>
                <Container data-aos="fade-up">
                    <Row>
                        <Col lg={7}>
                            <img src={fLogo} alt='footer logo' />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </Col>
                        <Col lg={{span: 4, offset: 1}}>
                            <h6>Quick Links</h6>
                            <ul>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Speaking and Consulting</Link></li>
                                <li><Link to="/">Achievements</Link></li>
                                <li><Link to="/">Publications</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='site-footer-bottom'>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <p>© 2024 Dr. Liana Lianov. All rights reserved</p>
                        </Col>
                        <Col lg={{span: 4, offset: 1}}>
                            <p>Terms & Privacy policy</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer