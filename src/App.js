import React from "react";
import "./App.css";
import moment from "moment";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstTime: moment(),
      secondTime: moment(),
      changeTime: ""
    };
  }

  setTime = () => {
    this.setState({ firstTime: moment() });
  };

  setSecTime = () => {
    let firstTime = this.state.firstTime;
    let secondTime = moment();
    this.setState({
      secondTime: moment(),
      changeTime: secondTime.format("x") - firstTime.format("x")
    });
  };

  render() {
    let arr = new Array(15).fill(0);
    return (
      <div>
        <h1> ClockGame </h1>
        <p>{this.state.firstTime.format("HH : mm : ss . SSS")} </p>
        <button onClick={this.setTime}> First </button>
        {arr.map(value => (
          <br />
        ))}
        <p> {this.state.changeTime} </p>
        {arr.map(value => (
          <br />
        ))}
        <p>{this.state.secondTime.format("HH : mm : ss . SSS")} </p>
        <button onClick={this.setSecTime}> Second </button>
        <input type = "file"/>
      </div>
    );
  }
}

export default App;
// 버튼을 누르면, 먼저 누른 시간이 state에 저장이 되고,
// 다시 또 누르면, 다음 누른 시간도 저장이 되어서
// 두 시간 사이의 간격이 출력되도록 하는 프로그램을 만들자.
// 가능하면, 여러번의 시도를 array안에 저장해서
// 순위가 나타나게 하고,
// 버튼에 표시되는 글자도
// 처음 누를 때는 Press me!
// 두번째 누를 때는 Press Again! 으로 바뀌도록 해보자.

//create-react-app
//npm : node package manager
// Template Literal

// Clock
// Now :
// 1 hours later :
// 2 hours later :
// <p style={{color: "blue"}}>time info</p>

//
// function App() {
//   return (
//     <div>
//       <h1> Clock </h1>
//       <p>
//         <p> {"Now: "}{moment().format()} </p>
//         <p> {`1 hour later: ${moment().add(1,`h`).format()}`} </p>
//         <p> {`2 hours later: ${moment().add(2, `h`).format()}`} </p>
//       </p>
//     </div>
//   );
// }
