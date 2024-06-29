import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CareerPositions = () => {
	const allPagesContent = useSelector((state) => state.pages.pages)
    const cPositionContent = allPagesContent.find((page) => page.slug === 'career-positions')
	console.log(cPositionContent)
	return (
		<div className='p-top-bottom-90'>
			<Container>
				<Row>
					<Col>
						<h2>Career Positions</h2>
						<div dangerouslySetInnerHTML={{ __html: cPositionContent?.content?.rendered }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default CareerPositions