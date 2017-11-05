class Counter extends Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: props.count
      };
    }
    componentDidMount() {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if(!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    }
    componentDidUpdate(prevProps, PrevState) {
      if(preState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }
    handleAddOne() {
      // console.log('Add One');
      this.setState((preState) => {
        return {
          count: preState.count + 1
        }
      });
    }
    handleMinusOne() {
      // console.log('minus One');
      this.setState((preStateOfCount) => {
        return {
          count: preStateOfCount.count - 1
        }
      });
    }
    handleReset() {
      // console.log('reset counter');
      this.setState(() => {
        return {
          count: 0
        }
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }

Counter.defaultProps = {
  count: 0
}

  export default Counter;