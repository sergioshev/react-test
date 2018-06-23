import React, { Component } from 'react';
import {
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    const {
      dropdownOpen
    } = this.state;

    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend" className="flag-area">
          <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Rusia</DropdownItem>
              <DropdownItem>Argentina</DropdownItem>
              <DropdownItem>Serbia</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </InputGroupAddon>
        <Input placeholder="phone" />
      </InputGroup>
    );
  }
};

export default PhoneNumber;