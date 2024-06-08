import React, { useState } from 'react'
import { Button, Col, Container, Row, Modal } from 'react-bootstrap'
import Youtube from '../images/youtube.png'
import LinkedIn from '../images/linkedin2.png'
import IntroImg from '../images/about.png'
import playIcon from '../images/video-circle.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Intro() {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    
    const allPagesContent = useSelector((state) => state.pages.pages)
    const homeContent = allPagesContent.find((page) => page.slug === 'home')
    
    return (
        <div className='intro-area p-top-bottom-90'>
            <Container>
                <Row>
                    <Col lg={7} md={12}>
                        <div className='intro-text' data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        {/* <div className='' dangerouslySetInnerHTML={{ __html: homeContent?.acf?.intro_text }}></div> */}
                            <h1>Dr Liana Lianov</h1>
                            <h2>MD, MPH, FACPM, FACLM, DipABLM</h2>
                            <p className='para'>Dr. Liana Lianov, MD, MPH, FACLM, FACPM, DipABLM, is a visionary global leader in lifestyle medicine and positive health. As the driving force behind the development of the groundbreaking lifestyle medicine core competencies, Dr. Lianov has played a pivotal role in shaping the future of healthcare.</p>
                            <div className='social-icons'>
                                <p><Link to="/"><img src={Youtube} alt="youtube" /></Link></p>
                                <p><Link to="/"><img src={LinkedIn} alt="linked" /></Link></p>
                            </div>
                            <Link to="/" className='intro-btn'>Fun and Creative Bits</Link>
                            {/* <div className='social-icons'>
                                <p><Link to={homeContent?.acf?.intro_text_social_icon_one_link}><img src={homeContent?.acf?.intro_text_social_icon_one} alt="youtube" /></Link></p>
                                <p><Link to={homeContent?.acf?.intro_text_social_icon_two_link}><img src={homeContent?.acf?.intro_text_social_icon_two} alt="linked" /></Link></p>
                            </div>
                            <Link to={homeContent?.acf?.intro_text_button_link} className='intro-btn'>{homeContent?.acf?.intro_text_button}</Link> */}
                        </div>
                    </Col>
                    <Col lg={5} md={12}>
                        <div className='intro-img' data-aos="fade-down" data-aos-offset="200" data-aos-delay="300" data-aos-easing="ease-in-sine" data-aos-duration="500">
                            <img src={IntroImg} alt="intro image" />
                            <Button className='watch-icon' onClick={handleShowModal}>
                                <img src={playIcon} alt="play icon" />
                                <span>Watch Video</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleCloseModal} className='video-popup'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {/* <iframe id="Geeks3" width="450" height="350" src={homeContent?.acf?.intro_video_link} frameborder="0" allowfullscreen></iframe> */}
                    <iframe id="liana" width="450" height="350" src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'></iframe>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Intro