const { React, ReactDOM } = window;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      normalCounter: 0
    };
  }

  componentDidMount() {
    this.update();
    this.normalUpdate();
  }

  normalUpdate() {
    this.setState({
      normalCounter: this.state.normalCounter + 1
    });
    this.setState({
      normalCounter: this.state.normalCounter + 1
    });
    setTimeout(() => {
      this.setState({
        normalCounter: this.state.normalCounter + 1
      });
      this.setState({
        normalCounter: this.state.normalCounter + 1
      });
    }, 1000);
  }

  async update() {
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    await wait(1000);
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'NormalCounter: ',
        this.state.normalCounter
      ),
      React.createElement(
        'p',
        null,
        'Counter: ',
        this.state.counter
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map