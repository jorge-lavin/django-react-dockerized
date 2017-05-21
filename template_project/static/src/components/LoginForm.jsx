import React from "react";
import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';


class LoginForm extends React.Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalUser">
          <Col componentClass={ControlLabel} md={2}>
            User
          </Col>
          <Col md={4}>
            <FormControl type="text" placeholder="User" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} md={2}>
            Password
          </Col>
          <Col md={4}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col mdOffset={4} md={4}>
            <Button type="submit" bsStyle="primary">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginForm;
