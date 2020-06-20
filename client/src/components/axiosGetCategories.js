import React, { Component } from "react";
import axios from "axios";

class Meetups extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    axios.get("https://api.meetup.com/find/groups").then((response) => {
      let results = response.data.results;
      this.setState({ results: results });
      console.log(response);
    });
  }
  render() {
    let studentsDisplay = this.state.results.map((result, index) => (
      <div key={index} className="card" style={{ width: "18rem" }}>
        {result.name}
        <br />
        {result.shortname}
      </div>
    ));
    return <div className="container">{studentsDisplay}</div>;
  }
}

export default Meetups;
