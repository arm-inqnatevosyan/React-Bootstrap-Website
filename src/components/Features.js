import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import img from "../img/419-4191399_red-gym-clip-art-at-clker-fitness-clipart.png";
import img1 from "../img/17-170719_fitness-silhouette-png-transparent-silhouette-gym-png-png.png";
import img2 from "../img/fitnes.png";
import img3 from "../img/fitnesduo.png";

const Features = () => {
  return (
    <div className='main1' id='main'>
        <Row>
        <h1>Features</h1>
            <Col sm="12">
                <CardGroup>
                    <Card  id='card1' className='text-white'>
                        <Card.Img variant='top'
                         src={img}
                         width="100"
                         height="180"
                         id='img'
                          />
                        <Card.Body className='text-center'>
                            <Card.Title>Specific Muscle</Card.Title>
                            <Card.Text>Lorem ipsum dolar sit<br />amet contescetur <br />adipcing</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id='card1' className='text-white' id='card1'>
                        <Card.Img
                         variant='top'
                          src={img1}
                          width="100"
                          height="180"
                          id='img1'
                           />
                        <Card.Body className='text-center'>
                            <Card.Title>Flex Your Muscle</Card.Title>
                            <Card.Text>Lorem ipsum dolar sit<br />amet contescetur <br />adipcing</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  id='card1' className='text-white'>
                        <Card.Img variant='top'
                         src={img2}
                         width="100"
                         height="180"
                         id='img2'
                          />
                        <Card.Body className='text-center' >
                            <Card.Title>Cardio Exercises</Card.Title>
                            <Card.Text>Lorem ipsum dolar sit<br />amet contescetur <br />adipcing</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  id='card1' className='text-white'>
                        <Card.Img variant='top'
                         src={img3}
                         width="100"
                         height="180"
                         id='img3'
                          />
                        <Card.Body className='text-center'>
                            <Card.Title>WeightLifting</Card.Title>
                            <Card.Text>Lorem ipsum dolar sit<br />amet contescetur <br />adipcing</Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Features
