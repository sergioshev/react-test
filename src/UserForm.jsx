import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import Profession from './Profession';
import PhoneNumber from './PhoneNumber';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      profession: '',
      phone: ''
    }
    this.onSumbit = this.onSumbit.bind(this);
    this.handleField = this.handleField.bind(this);
  };

  handleField(e, field) {
    let newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  };

  onSumbit() {
    alert(`
      Form submited with
      name=${this.state.firstName}
      lastName=${this.state.lastName}
      profession=${this.state.profession}
      phoneNumber=${this.state.phone}
    `);
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label>ИМЯ</Label>
              <Input
                name="firstName"
                placeholder="Сергей"
                onChange={(e) => this.handleField(e, 'firstName')}
                />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>ФАМИЛИЯ</Label>
              <Input
                name="lastName"
                placeholder="Миргород"
                onChange={(e) => this.handleField(e, 'lastName')}
                />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>ПРОФЕССИЯ</Label>
              <Profession
                name="profession"
                onChange={(e) => this.handleField(e, 'profession')}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>ТЕЛЕФОН</Label>
              <PhoneNumber
                name="phone"
                onChange={(e) => this.handleField(e, 'phone')}
                />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="primary"
              onClick={this.onSumbit}
              >Зарегистрироваться</Button>
          </Col>
        </Row>
      </Form>
    );
  }
};

/*
<Input name="profession" placeholder="Дровосек"/>
*/
export default UserForm;