import React from "react";
import Circular from "./components/Circular";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  // render 후에 실행되는 라이프사이클 함수
  componentDidMount() {
    // setTimeout : 몇초 후에 실행하는지 정해주는 함수
    setTimeout(() => {
      this.setState({
        isLoading: true
      });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? <div>안녕하세요? 반가워요.</div> : <Circular />}</div>
    );
  }
}

export default App;
