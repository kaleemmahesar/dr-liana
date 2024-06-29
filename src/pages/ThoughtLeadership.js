import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ThoughtLeadership = () => {
	const allPagesContent = useSelector((state) => state.pages.pages)
    const tLeadershipContent = allPagesContent.find((page) => page.slug === 'thought-leadership')
	console.log(tLeadershipContent)
	return (
		<div className='p-top-bottom-90'>
			<Container>
				<Row>
					<Col>
						<h2>Thought Leadership</h2>
						<div dangerouslySetInnerHTML={{ __html: tLeadershipContent?.content?.rendered }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ThoughtLeadership