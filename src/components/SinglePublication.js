import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SinglePublication() {
    const { publications, isLoading } = useSelector((state) => state.posts)
    
    const { name } = useParams();

    const singlePublication = publications?.find((publication) => {
        let plinks = publication?.link.split('/');
        var plinksLast = plinks?.pop() || plinks?.pop();
        if (plinksLast === name) {
            return publication
        }
    })
    // console.log(singlePublication)
    
    
    return (
        <div className='single-post p-top-bottom-90'>
			<Container>
				<Row>
					<Col lg={12}>
                        <h2>{singlePublication?.title.rendered}</h2>
                        <div  dangerouslySetInnerHTML={{ __html: singlePublication?.content.rendered }}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SinglePublication