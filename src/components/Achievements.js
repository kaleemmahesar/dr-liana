import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileImage from '../images/profile.png'
import CaseImage from '../images/case.png'
import BookImage from '../images/book.png'
import CupImage from '../images/cup.png'

const Achievements = () => {
	return (
		<div className='achievements p-top-bottom-90'>
			<Container>
				<Row>
					<Col lg={6} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
						<h2><strong>Achievements</strong></h2>
						<p className='para'>Discover the milestones and accolades that define Dr. Liana Lianov's illustrious career. This section highlights her significant contributions to lifestyle medicine and positive health, underscoring her dedication and leadership in the field.</p>
						<h5>Major Accomplishments</h5>
						<p className='para'>Explore a detailed showcase of Dr. Lianov’s achievements, including prestigious awards, influential roles, and groundbreaking projects. Each achievement reflects her commitment to advancing healthcare through innovative approaches and exceptional leadership.</p>
						<Link to="/" className='btn btn-primary'>Get Started</Link>
					</Col>
					<Col lg={6} data-aos="zoom-out" data-aos-offset="200" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
						<ul className='achievement-box'>
							<li>
								<Link to="/achievements">
									<Image src={ProfileImage} alt='hello' />
									<h5>Presentations</h5>
								</Link>
							</li>
							<li>
								<Link to="/achievements">
									<Image src={CaseImage} alt='hello' />
									<h5>Thought Leadership</h5>
								</Link>
							</li>
							<li>
								<Link to="/achievements">
									<Image src={BookImage} alt='hello' />
									<h5>Career positions</h5>
								</Link>
							</li>
							<li>
								<Link to="/achievements">
									<Image src={CupImage} alt='hello' />
									<h5>Awards</h5>
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Achievements