const { React, ReactDOM } = window;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const jsonPromises = urls.map(async url => {
  const response = await fetch(url);
  return response.json();
});

async function series() {
  await wait(500); // Wait 500ms…
  await wait(500); // …then wait another 500ms.
  return "done!";
}

async function parallel() {
  const wait1 = wait(500); // Start a 500ms timer asynchronously…
  const wait2 = wait(500); // …meaning this timer happens in parallel.
  await wait1; // Wait 500ms for the first timer…
  await wait2; // …by which time this timer has already finished.
  return "done!";
}

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
