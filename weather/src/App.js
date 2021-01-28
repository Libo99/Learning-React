import React from "react";
import SeasonDisplay from './Components/SeasonDisplay';
import Loader from "./Components/Loader";

class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { lat: null, errorMessage: "" };
//   }
    state = {lat: null, errorMessage: ''}

  componentDidMount() {
    console.log("component is mounted");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return (
      <Loader/>
    );
  }
}

export default App;
