import React from "react";
import axios from "axios";
//import ApiHandler from "../../api/apiHandler";



class FormCourse extends React.Component {
  state = {
    name: "",
    description: "",
    Category: "",
    image: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  //   axios
  //     .post("/api/course", {
  //       name: this.state.name,
  //       description: this.state.description,
  //       image: this.state.image,
  //     })

  //     .then((apiResponse) => {
  //       console.log(apiResponse);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

    axios
      .post("http://localhost:4000/api/course", {
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={this.handleChange} type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input onChange={this.handleChange} type="text" name="price" />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input onChange={this.handleChange} type="text" name="name" />
        </div>
        <button>Submit !</button>
      </form>
    );
  }
}

export default FormCourse;
