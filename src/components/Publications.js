import React from 'react'
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import BookImg from '../images/book1.png'
import BookImg2 from '../images/book2.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Publications() {
    // const { publications, isLoading } = useSelector((state) => state.posts)
    // console.log(publications)
    return (
        <div className='publications p-top-bottom-90'>
            <Container data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <h2 className='text-center'><span>Publications</span></h2>
                <Row>
                    {
                        // isLoading ?
                        // <div className='spinner-wrapper'> 
                        //     <Spinner animation="light" variant="info" />
                        // </div>:
                        // publications.map((publication) => {
                        //     return (
                        //         <Col key={publication.id} xl={6} lg={12}>
                        //             <div className='book-box'>
                        //                 <Image src={publication?._embedded['wp:featuredmedia']['0'].source_url} />
                        //                 <div className='boox-text'>
                        //                     <h4>COMMENTARY</h4>
                        //                     <h5>{publication?.title.rendered}</h5>
                        //                     <p className='para'>{publication?.excerpt.rendered}</p>
                        //                     <Link to={publication?.link}>Visit Now</Link>
                        //                 </div>
                        //             </div>
                        //         </Col>
                        //     )
                        // })
                    }
                    <Col xl={6} lg={12}>
                        <div className='book-box'>
                            <Image src={BookImg} />
                            <div className='boox-text'>
                                <h4>COMMENTARY</h4>
                                <h5>Reignite Professional Passion Through Lifestyle Medicine</h5>
                                <p className='para'>Practicing medicine remains enormously fulfilling in many ways.</p>
                                <Link to="/">Visit Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={12}>
                        <div className='book-box'>
                            <Image src={BookImg2} />
                            <div className='boox-text'>
                                <h4>COMMENTARY</h4>
                                <h5>Reignite Professional Passion Through Lifestyle Medicine</h5>
                                <p className='para'>Practicing medicine remains enormously fulfilling in many ways.</p>
                                <Link to="/">Visit Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={12}>
                        <div className='book-box'>
                            <Image src={BookImg} />
                            <div className='boox-text'>
                                <h4>COMMENTARY</h4>
                                <h5>Reignite Professional Passion Through Lifestyle Medicine</h5>
                                <p className='para'>Practicing medicine remains enormously fulfilling in many ways.</p>
                                <Link to="/">Visit Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={12}>
                        <div className='book-box'>
                            <Image src={BookImg2} />
                            <div className='boox-text'>
                                <h4>COMMENTARY</h4>
                                <h5>Reignite Professional Passion Through Lifestyle Medicine</h5>
                                <p className='para'>Practicing medicine remains enormously fulfilling in many ways.</p>
                                <Link to="/">Visit Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <button className='btn btn-primary'>See More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Publications