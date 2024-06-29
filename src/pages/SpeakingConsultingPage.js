import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SpeakingConsultingPage = () => {
	const allPagesContent = useSelector((state) => state.pages.pages)
    const speakingContent = allPagesContent.find((page) => page.slug === 'speaking-consulting')
	console.log(speakingContent)
	return (
		<div className='p-top-bottom-90'>
			<Container>
				<Row>
					<Col>
						<h2>Speaking & Consulting</h2>
						<div dangerouslySetInnerHTML={{ __html: speakingContent?.content?.rendered }}></div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default SpeakingConsultingPage