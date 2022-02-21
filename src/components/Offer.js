import React from 'react'
import { Button, Card, CardGroup, CardImg, Col, Container, Row } from 'react-bootstrap'
import img from "../img/offes.jpg";

const Offer = () => {
  return (
    <div id='offer'>
      <Container>
      <Row>
        <CardGroup >
        <Card>
          <CardImg src={img} id="offer-img"/>
        </Card>
        <Card>
          <Card.Body id='card-offer'>
            <Card.Title className='mt-5 text-center'><h1>Learn More About <br /> <b id='offerb'>Us</b></h1></Card.Title>
            <Card.Text className='mt-3'><h6>Lorem ipshumLorem Ipsum is simply dummy text<br />
             of the printing and typesetting industry.<br />
              Lorem Ipsum has been the industry's standard dummy<br />
             text ever since the 1500s, when an unknown printer took</h6></Card.Text>
             <Button className='d-flex justify-content-center m-auto' variant='danger'
              style={{width:140,
              borderRadius:10,
              textTransform:'uppercase',
              letterSpacing:1,
              backgroundColor:'red'
              }}>Read More</Button>
          </Card.Body>
        </Card>
        </CardGroup>
      </Row>
      </Container>
    </div>
  )
}

export default Offer
