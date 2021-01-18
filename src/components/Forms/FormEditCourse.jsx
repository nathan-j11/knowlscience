import React from "react";

// import axios from "axios";
import ApiHandler from "../api/apiHandler";

const api = new ApiHandler();

class FromCourse extends React.Component {
  state = {
    name: "",
    description: "",
    image: "",
  };

  componentDidMount() {
    const courseId = this.props.match.params.id;

    api
      .get("/api/courses/" + courseId)
      .then((apiResponse) => {
        // console.log(apiResponse);
        const course = apiResponse.data;
        this.setState({
          name: course.name,
          description: course.price,
          image: course.image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const burgerId = this.props.match.params.id;

    api
      .patch("/api/courses/" + courseId, {
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
      })
      .then((apiResponse) => {
        this.props.history.push("/admin/dashboard");
        // console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .post("http://localhost:4000/api/courses", {
    //     name: this.state.name,
    //     description: this.state.description,
    //     image: this.state.image,
    //   })
    //   .then((apiResponse) => {
    //     console.log(apiResponse);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Edit Course !</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            type="text"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            type="text"
            name="name"
          />
        </div>
        <button>Submit !</button>
      </form>
    );
  }
}

export default FromCourse;
