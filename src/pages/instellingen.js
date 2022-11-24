import React from "react";
import "../styles/settings.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Instellingen() {
  return (
    <>
    <div className="vak">
    <div>
        <h2>Verander gebruiker instellingen</h2>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Home Club</Form.Label>
        <Form.Control type="homeClub" placeholder="Enter Club" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="i" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}
