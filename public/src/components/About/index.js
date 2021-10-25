import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function About(){
    const imageUrl = process.env.PUBLIC_URL+'/img/bio-pic.jpg'
    return <Container>
        <Row>
        <Col xs={12} md={3} className="text-center">
        <Image src={imageUrl} style={{width: '100%'}} roundedCircle className="m-2"/>
        </Col>
        <Col xs={12} md={9} className="d-flex justify-content-center">
        <Card border="secondary" bg="info" text="light" style={{ width: '100%' }} className="m-5">           
            <Card.Header>About Me</Card.Header>
            <Card.Body>
                <Card.Text>
                Coding bootcamp graduate specializing in Javascript. Experience building full stack web applications from the ground up, with emphasis on mobile friendly design. Professional strengths include creative problem solving, time management and communication.  Performs well in a fast paced team environment.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
}
export default About;