import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount(){
      console.log('component is mounted');
  }

  componentDidUpdate(){
      console.log('component is updated');
  }

  

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <h1>Latidude: {this.state.lat}</h1>;
    }

    return <h1>Loading...</h1>;
  }
}

export default App;
