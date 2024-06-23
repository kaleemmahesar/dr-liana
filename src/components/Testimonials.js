import React, {useState} from 'react'
// import Swiper core and required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Testimonials() {
    
    const { testmonials, isLoading } = useSelector((state) => state.posts)

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
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 50,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            initialSlide={1}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 'auto',
                                    initialSlide: 0
                                },
                                1200: {
                                    slidesPerView: 'auto',
                                    initialSlide: 1
                                },
                            }}
                            className="testimonialsSlider"
                            
                        >
                            {
                                testmonials.map((testimonial) => {
                                    return (
                                        <SwiperSlide key={testimonial.id}>
                                            <div className='slide-box'>
                                                <p className='para' dangerouslySetInnerHTML={{ __html: testimonial?.content?.rendered}}></p>
                                                <h6 dangerouslySetInnerHTML={{ __html: testimonial?.title?.rendered}}></h6>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            
                            {/* <SwiperSlide>
                                <div className='slide-box'>
                                    <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                    <h6>Johan Stark</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide-box'>
                                    <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                    <h6>Johan Stark</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide-box'>
                                    <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                    <h6>Johan Stark</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide-box'>
                                    <p className='para'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer”</p>
                                    <h6>Johan Stark</h6>
                                </div>
                            </SwiperSlide> */}
                        </Swiper>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials