import React, { Component } from 'react';

class VisibilityToggle extends Component {
    constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
        Visibility: false
      };
    }
    handleToggleVisibility() {
      this.setState((preState) => {
        return {
          Visibility: !preState.Visibility
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {
              this.state.Visibility ? 'Hide details' : 'show details'
            }
          </button>
          {this.state.Visibility && (
            <div>
              <p>Hey. There are some details.</p>
            </div>
          )}
        </div>
      )
    }
  }
  
  export default VisibilityToggle;
  