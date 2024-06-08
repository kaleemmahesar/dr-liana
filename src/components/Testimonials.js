import React, {useState} from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Col, Container, Row } from 'react-bootstrap';


function Testimonials() {
    return (
        <div className='testimonials p-top-bottom-90' data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>What People <span>Are Saying</span></h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={55}
                            slidesPerView={3}
                            pagination={true}
                            navigation={ false }
                            autoplay={ false }
                            loop={true}
                            centeredSlides={true}
                            initialSlide={1}
                            breakpoints={{
                                100: {
                                slidesPerView: 1,
                                },
                                768: {
                                slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                <h6>Johan Stark</h6>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                <h6>Johan Stark</h6>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                <h6>Johan Stark</h6>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                <h6>Johan Stark</h6>
                            </SwiperSlide>
                        </Swiper>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials