import React, { Component } from 'react';
import {
  Container,
  Card,
  CardText,
  CardBody
} from 'reactstrap';

import UserForm from './UserForm';


class RegForm extends Component {
  render() {
    return(
      <Container md={4} fluid>
        <Card className="reg-container">
          <CardBody>
            <CardText>
              <strong>Зарегестрируйтесь </strong>и начните продавать услуги через интернет сегодня
            </CardText>
            <UserForm/>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default RegForm;