import React from "react";
import "../styles/settings.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useAuth0} from "@auth0/auth0-react";
 
export default function Instellingen() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <>
    <div className="vak2">
    <div>
        <h2>Join next Weeks Tournament</h2>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="name" placeholder="Enter name" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required type="email" placeholder="Enter email" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Course</Form.Label><br></br>     
          <Form.Select  required aria-label="Default select example" id="i">
          <option>Select Course</option>
          <option value="1">Waregem</option>
          <option value="2">Oudenaarde</option>
          <option value="3">Damme</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>hcp</Form.Label>
        <Form.Control  required type="hcp" placeholder="hcp" id="i" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSelect">
      <Form.Label>hour slot</Form.Label><br></br>
        <Form.Select  required aria-label="Default select example" id="i">
        <option>Select hour Slot</option>
        <option value="1">ochtend</option>
        <option value="2">voormiddag</option>
        <option value="3">middag</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        join
      </Button>
    </Form>
      </div>

      <div>
      <h2>Make reservation</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control  required type="name" placeholder="Enter name" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required type="email" placeholder="Enter email" id="i"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Course</Form.Label><br></br>     
          <Form.Select  required aria-label="Default select example" id="i">
          <option>Select Course</option>
          <option value="1">Waregem</option>
          <option value="2">Oudenaarde</option>
          <option value="3">Damme</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amount</Form.Label>
        <Form.Control  required type="amount" placeholder="1--4" id="i" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSelect">
      <Form.Label>Time</Form.Label><br></br>   
        <Form.Select  required aria-label="Default select example" id="i">
        <option>Select hour Slot</option>
        <option value="1">8.30</option>
        <option value="2">8.50</option>
        <option value="3">9.10</option>
        <option value="4">9.30</option>
        <option value="5">9.50</option>
        <option value="6">10.20</option>
        <option value="7">10.50</option>
        <option value="8">11.10</option>
        <option value="9">11.30</option>
        <option value="10">11.50</option>
        <option value="10">12.10</option>
        <option value="10">12.30</option>
        <option value="10">12.50</option>
        <option value="10">13.10</option>
        <option value="10">13.30</option>
        <option value="10">13.50</option>
        <option value="10">14.10</option>
        <option value="10">14.30</option>
        <option value="10">14.50</option>
        <option value="10">15.10</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        comfirm
      </Button>
    </Form>

      </div>
    </div>
    </>
  )
  );
}
