import React from "react";
import ApiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
const api = new ApiHandler();

class TableBurgers extends React.Component {
  state = {
    courses: [],
  };

  // getAllBurgers() {
  //   api
  //     .get("/api/burgers")
  //     .then((apiResponse) => {
  //       console.log(apiResponse);
  //       this.setState({
  //         burgers: apiResponse.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    // this.getAllCourses();
    api
      .get("/api/courses")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          burgers: apiResponse.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = (id) => {
    api
      .delete(`/api/courses/${id}`)
      .then((apiResponse) => {
        // this.getAllCourses();
        this.setState({
          burgers: this.state.courses.filter((course) => course._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courses.map((course) => {
            return (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <img
                    style={{ width: 48, height: 48 }}
                    src={course.image}
                    alt={course.name}
                  />
                </td>
                <td>
                  <Link to={`/admin/course-form/${course._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(course._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableCourses;
