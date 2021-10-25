import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
function Resume() {
        return<Container>
            <Row>
                <Col xs={12} md={12} className="d-flex justify-content-center">
                    <Card border="secondary" bg="info" text="light" style={{ width: '100%' }} className="m-5">
                        <Card.Header>Skills</Card.Header>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><strong>Languages:</strong> HTML (HTML5), Javascript (ES6+), CSS (CSS3), SQL, NoSQL</ListGroupItem>
                                <ListGroupItem><strong>Applications:</strong> GitHub, MongoDB, MySQL, Node JS</ListGroupItem>
                                <ListGroupItem><strong>Packages and Tools:</strong> Express, React, Bootstrap, jQuery, Jest (testing library), Sequelize, Handlebars, Socket.io, Mongoose, Graphql (Apollo), gridfs</ListGroupItem>
                            </ListGroup>

                    </Card>
                </Col>
            </Row>
            <Row><a href = "https://docs.google.com/document/d/e/2PACX-1vTDWDRVwVjdlRIMSvXtpwL9y7UNC5BwklQKGsAX1SfpQ1zfvSfZWLJwwUji2wTY7jd384WTZbGZ9ZXP/pub" target='_blank' className='btn btn-info m-2 text-light'>Full Resume</a></Row>
        </Container>
    }

export default Resume;