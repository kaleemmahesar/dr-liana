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
					<Col lg={6}>
						<h2>Achievements</h2>
						<p className='para'>Discover the milestones and accolades that define Dr. Liana Lianov's illustrious career. This section highlights her significant contributions to lifestyle medicine and positive health, underscoring her dedication and leadership in the field.</p>
						<h5>Major Accomplishments</h5>
						<p className='para'>Explore a detailed showcase of Dr. Lianov’s achievements, including prestigious awards, influential roles, and groundbreaking projects. Each achievement reflects her commitment to advancing healthcare through innovative approaches and exceptional leadership.</p>
						<Link to="/" className='btn btn-primary'>Get Started</Link>
					</Col>
					<Col lg={6}>
						<ul className='achievement-box'>
							<li>
								<Image src={ProfileImage} alt='hello' />
								<h5>Presentations</h5>
							</li>
							<li>
								<Image src={CaseImage} alt='hello' />
								<h5>Thought Leadership</h5>
							</li>
							<li>
								<Image src={BookImage} alt='hello' />
								<h5>Career positions</h5>
							</li>
							<li>
								<Image src={CupImage} alt='hello' />
								<h5>Awards</h5>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Achievements