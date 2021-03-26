import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: [],
    error: null,
  };

  componentDidMount() {
    fetch("/course", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((response) => this.setState({ courses: response.courses }))
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    return (
      <ul>
        {this.state.courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    );
  }
}

export default Courses;
