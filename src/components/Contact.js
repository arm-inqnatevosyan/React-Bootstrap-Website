import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact Us</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id='form-input' />
  </Form.Group>
 <Form.Group className="mb-2">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id='form-input' />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" variant="danger" type="submit" id='btn'>
    Submit
  </Button>
    </Form>
    </div>
  )
}

export default Contact
