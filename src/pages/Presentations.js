import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap';

function Presentations() {
    const allPagesContent = useSelector((state) => state.pages.pages)
    const presentationsContent = allPagesContent.find((page) => page.slug === 'presentations')
	console.log(presentationsContent)
    return (
        <div className='p-top-bottom-90'>
			<Container>
				<Row>
					<Col>
						<h2>Presentations</h2>
						<div dangerouslySetInnerHTML={{ __html: presentationsContent?.content?.rendered }}></div>
					</Col>
				</Row>
			</Container>
		</div>
    )
}

export default Presentations