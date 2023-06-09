import React, { useState } from "react";
import { render } from "react-dom";

import "./styles.css";

const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(event.target);
    const {
      target: { value }
    } =event;
    let willUpdate = true;
    if(typeof vaildator ==="function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate)  {
      setValue(value);
    }
    // setValue(value);
  // return { value };
  };
  return { value, onChange};
};


export default function App() {
  // const maxLen = (value) => value.length < 10;
  const maxLen = (value) => value.includes("@");
  const name = useInput("Mr.", maxLen);
  // const email = useInput("@");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Email" {...email} /> */}
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
}


export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>IncrementItem</button>
      <button onClick={decrementItem}>DecrementItem</button>
    </div>
  );
}

without Hooks
class AppUgly extends React.Component {
  state = {
    item: 1
  };

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>IncrementItem</button>
        <button onClick={this.decrementItem}>DecrementItem</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);







