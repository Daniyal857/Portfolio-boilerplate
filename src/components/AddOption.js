import React, { Component } from 'react';

class AddOption extends Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        errorMsg: ''
      }
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const errorMsg = this.props.handleAddOption(option);
  
      this.setState(() => {
        return {errorMsg}
      });
      if(!errorMsg) {
          e.target.elements.option.value = '';
      }
    }
    render() {
      const {errorMsg} = this.state;
      return (
        <div>
          {errorMsg && <p className="add-option-error">{errorMsg}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option-input" type="text" name="option" />
            <button className="button">Add Option</button>
        </form>
        </div>
      )
    };
}

export default AddOption;