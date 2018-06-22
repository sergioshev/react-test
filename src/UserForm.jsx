import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class UserForm extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label>ИМЯ</Label>
              <Input name="firstName" placeholder="Сергей"/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>ФАМИЛИЯ</Label>
              <Input name="lastName" placeholder="Миргород"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>ПРОФЕССИЯ</Label>
              <Input name="profession" placeholder="Дровосек"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>ТЕЛЕФОН</Label>
              <Input name="phone" placeholder="Дровосек"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
};

export default UserForm;