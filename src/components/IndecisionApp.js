import React, {Component} from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
      selectedOption: ''
    }
  }
    componentDidMount() {
        try {
            // console.log('ComponentDidMount');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (error) {
            // DO nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('Json ==> ', json);
        }
    }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: ''
    }))
  }
  handleDeleteOption(optionToRemove) {
    // console.log('HDO: ', option);
    this.setState((prevState) => ({
        options: prevState.options.filter( (option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const rendomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rendomNum];
    // alert(option);
    this.setState(() => ({
      selectedOption: option
    }))
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value to add item.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already in the list.'
    }

    this.setState((preStateOfOptions) => {
      return {
        options: preStateOfOptions.options.concat(option)
      }
    });
  }
  render() {
    const subTitle  = 'Put your life in the hands of a computer';
    const {options} = this.state;
    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption ={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;