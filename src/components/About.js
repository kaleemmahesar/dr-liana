import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutImage from '../images/about1.png'
import hLogo from '../images/hlogo.png'
import { useSelector } from 'react-redux'

const About = () => {
    const allPagesContent = useSelector((state) => state.pages.pages)
    const homeContent = allPagesContent.find((page) => page.slug === 'home')
    console.log(homeContent)
    return (
        <div className='about-area p-top-bottom-90'>
            <Container>
                <Row>
                    <Col md={12} lg={12} dangerouslySetInnerHTML={{ __html: homeContent?.acf?.about_professions }}></Col>
                    {/* <Col md={12} lg={12}  data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        <h2>For Health <span>Professionals</span></h2>
                        <div className='about-buttons-wrapper'>
                            <a href="#" className='intro-btn'>GPHI - Courses Programs</a>
                            <a href="#" className='intro-btn'>GPHI Learn – Science Videos</a>
                            <a href="#" className='intro-btn'>Roots of Positive Change</a>
                            <a href="#" className='intro-btn'>Lifestyle Medicine From the Inside Out</a>
                            <a href="#" className='intro-btn'>My Happy Avatar Coach App</a>
                        </div>
                        <h2>For Wellbeing <span>Seekers</span></h2>
                        <div className='about-buttons-wrapper'>
                            <a href="#" className='intro-btn'>Strengths in the Mirror book</a>
                            <a href="#" className='intro-btn'>Learn-And-Act Videos</a>
                            <a href="#" className='intro-btn'>YouTube Videos</a>
                            <a href="#" className='intro-btn'>Inspiration</a>
                            <a href="#" className='intro-btn'>My Happy Avatar</a>
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col lg={6} md={12} className='about-img-wrap'  data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        <div className='aboutimg'>
                            <img src={homeContent?.acf?.about_image} alt='about section' />
                            {/* <img src={AboutImage} alt='about section' /> */}
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='about-text'>
                        {/* <h2>About</h2>
                        <p className='para'>Dr. Liana Lianov, MD, MPH, FACLM, FACPM, DipABLM, is a visionary global leader in lifestyle medicine and positive health. As the driving force behind the development of the groundbreaking lifestyle medicine core competencies, Dr. Lianov has played a pivotal role in shaping the future of healthcare. She received the 2022 Trailblazer Award from the American College of Lifestyle Medicine (ACLM). Her leadership extends to her role as lead faculty for the ACLM Physician and Health Professional Wellbeing course, as well as chair of the ACLM Happiness Science and Positive  Health Committee. She is the president and founder of the Global Positive Health Institute (GPHI), and she serves as an Assistant Professor at the Center for Positive Health Sciences at Royal College of Surgeons Ireland – RCSI University of Medical and Health Sciences.</p> */}
                        <div className='' dangerouslySetInnerHTML={{ __html: homeContent?.acf?.about_text }}></div>
                        <img src={homeContent?.acf?.about_signature} alt='about signature' />
                        {homeContent?.acf?.about_button !== '' && <Link className='btn btn-primary' to={homeContent?.acf?.about_button_link}>{homeContent?.acf?.about_button}</Link>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About