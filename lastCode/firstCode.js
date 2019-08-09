import React from "react";
import "./App.css";
import moment from "moment";

function TimeInfo(props) {
  return (
    <p>
      {`${props.name} ${moment()
        .add(props.hourIncrement, "h")
        .format(`H:mm:ss`)}`}
    </p>
  );
}

function sayHi(props) {
  alert("Go back " + props);
}
let sayHello = props => {
  alert("Go Back!" + props);
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "heech", nameInput: "" };
  }

  changeName = () => {
    let name = "";

    if (this.state.name === "Anna") {
      name = "Heech";
    } else {
      name = "Anna";
    }

    this.setState({ name: name });
  };

  render() {
    return (
      <div>
      <h1> Clock </h1>
      <p>
        <TimeInfo name="Now : " hourIncrement={0} />
        <TimeInfo name="1 hours later : " hourIncrement={1} />
        <TimeInfo name="2 hours later : " hourIncrement={2} />
        <button onClick={this.changeName}> dfs </button>
        <p> {this.state.nameInput}</p>
        <input
          value={this.state.nameInput}
          onChange={ev => {
            // console.log(ev.target.value)
            this.setState({ nameInput: ev.target.value }) }}
        />
      </p
      </div>
    );
  }
}

export default App;
