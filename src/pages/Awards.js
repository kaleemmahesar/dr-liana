import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap';

function Awards() {
    const allPagesContent = useSelector((state) => state.pages.pages)
    const awardsContent = allPagesContent.find((page) => page.slug === 'awards')
	console.log(awardsContent)
    return (
        <div className='p-top-bottom-90'>
			<Container>
				<Row>
					<Col>
						<h2>Awards</h2>
						<div dangerouslySetInnerHTML={{ __html: awardsContent?.content?.rendered }}></div>
					</Col>
				</Row>
			</Container>
		</div>
    )
}

export default Awards