import React, { Component } from 'react';
import { connect } from 'react-redux';
import './suggestions.scss';
import { getAddress } from 'actions';

class Suggestions extends Component {
  constructor(props) {
    super(props);
    console.log('Suggestions props', props);
  }

  getAddress = item => {
    console.log(item);
    this.props.getAddress(item);
  };

  render() {
    const { Items } = this.props.suggestionsList || {};
    return (
      <React.Fragment>
        {Items ? (
          Items.map((item, index) => (
            <div
              key={index}
              tabIndex="0"
              className="address-item"
              onClick={this.getAddress.bind(this, item)}
            >
              {item.Id} {item.Text}
            </div>
          ))
        ) : (
          <div className="address-item">No Address Found</div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log('suggestions component mapStateToProps =>', state);
  const { suggestionsList } = state.suggestions;
  return { suggestionsList };
}

export default connect(
  mapStateToProps,
  {
    getAddress
  }
)(Suggestions);
