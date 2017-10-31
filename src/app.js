const { React, ReactDOM } = window;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counterAsync: 0,
    };
  }

  componentDidMount() {
    this.update();
    this.updateAsync();
  }

  update() {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
    wait(1000).then(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      this.setState({
        counter: this.state.counter + 1,
      });
    });
  }

  async updateAsync() {
    this.setState({
      counterAsync: this.state.counterAsync + 1,
    });
    this.setState({
      counterAsync: this.state.counterAsync + 1,
    });
    await wait(1000);
    this.setState({
      counterAsync: this.state.counterAsync + 1,
    });
    this.setState({
      counterAsync: this.state.counterAsync + 1,
    });
  }

  render() {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <p>counterAsync: {this.state.counterAsync}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
