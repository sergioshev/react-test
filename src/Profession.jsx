import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const proffesions = [
  {
    key: 1,
    name: "Дровосек"
  },
  {
    key: 2,
    name: "Трубачист"
  },
  {
    key: 3,
    name: "Парикмахер"
  },
  {
    key: 4,
    name: "Пекарь"
  },
  {
    key: 5,
    name: "Дегустатор"
  },
  {
    key: 6,
    name: "Дробильщик"
  }
];


class Profession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: ''
    }

    this.onChange = this.onChange.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.clearSuggestions = this.clearSuggestions.bind(this);
    this.refreshSuggestions = this.refreshSuggestions.bind(this);
  }

  refreshSuggestions({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }; 

  getSuggestions(value) {
    const valueAdjusted = value.trim().toLowerCase();
    const len = valueAdjusted.length;

    return len === 0 ? [] : proffesions.filter(prof =>
      prof.name.toLowerCase().slice(0, len) === valueAdjusted
    );
  };

  onChange(e, { newValue }) {
    this.setState({
      value: newValue
    });
    this.props.onChange(e);
  }

  renderSuggestion(suggestion) { 
    return (
      <div>
        {suggestion.name}
      </div>
    );
  };

  clearSuggestions() {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Дровосек',
      value,
      name: this.props.name,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          onSubmit={() => true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.refreshSuggestions}
          onSuggestionsClearRequested={this.clearSuggestions}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default Profession;