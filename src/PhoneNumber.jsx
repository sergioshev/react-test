import React, { Component } from 'react';
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';

import rusFlag from './flags/rus.png';
import belFlag from './flags/bel.png';
import argFlag from './flags/arg.png';

const countries = [
  {
    flag: rusFlag,
    name: "Russia",
    prefix: "+7",
    key: 1
  },
  {
    flag: argFlag,
    name: "Argentina",
    prefix: "+54",
    key: 2
  },
  {
    flag: belFlag,
    name: "Belarus",
    prefix: "+375",
    key: 3
  }
];

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      selected: countries[0],
      value: countries[0].prefix
    };

    this.toggle = this.toggle.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(country) {
    this.setState({
      selected: country,
      value: country.prefix
    })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  renderOptions() {
    return countries.map(c => (
      <DropdownItem 
        key={c.key}
        onClick={() => this.handleClick(c)}>
        <img alt="flag" src={c.flag}/>
        {c.name}
      </DropdownItem>
    ));
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange(e);
  }
 
  render() {
    const {
      dropdownOpen,
      selected,
      value
    } = this.state;

    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend" className="flag-area">
          <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              <img alt="flag" src={selected.flag}/>
            </DropdownToggle>
            <DropdownMenu>
              {this.renderOptions()}
            </DropdownMenu>
          </ButtonDropdown>
        </InputGroupAddon>
        <Input
          name={this.props.name || "phone"}
          onChange={this.handleChange}
          value={value}
        />
      </InputGroup>
    );
  }
};

export default PhoneNumber;