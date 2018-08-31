import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSuggestions } from 'actions';

import { Address, Suggestions } from 'components';
import './search.scss';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
    address: '',
    showSuggestions: true
  };

  getInfo = () => {
    this.props.getSuggestions(this.state.query);
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    const { ContainerCount, Items } = this.props.suggestionsList || {};
    const { formattedAddress } = this.props.address || {};

    return (
      <div>
        <div className="capture-plus-select">
          <input
            className="capture-plus-widget"
            maxLength="128"
            name="capture-plus"
            id="capture-plus"
            placeholder="E.g 'CR0 3RL' or '36 Factory Lane"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          {this.state.showSuggestions ? (
            <div className="capture-plus-list-results">
              <h3 className="result-header">Found : {ContainerCount}</h3>
              <Suggestions results={Items} />
            </div>
          ) : null}
          <Address address={formattedAddress || null} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Search container mapStateToProps =>', state);
  const { suggestionsList, address } = state.suggestions;
  return { suggestionsList, address };
};

export default connect(
  mapStateToProps,
  {
    getSuggestions
  }
)(Search);
