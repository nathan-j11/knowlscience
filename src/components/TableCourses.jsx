import React from "react";
//import ApiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
//import ApiHandler from "../../../../../React-complete/dev-squad-911-m3-crud/client/src/api/apiHandler";
import axios from "axios";



class TableCourses extends React.Component {
  state = {
    courses: [],
  };

   
  getAllCourses = () =>{
    axios
      .get("http://localhost:4000/api/course")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          courses: apiResponse.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
      this.getAllCourses();
    axios
      .post("/http://localhost:4000/api/course")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          courses: apiResponse.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/course/${id}`)
      .then((apiResponse) => {
         this.getAllCourses();
         this.setState({
           courses: this.state.courses.filter((course) => course._id !== id),
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
                {/* <td>
                  <img
                    style={{ width: 48, height: 48 }}
                    src={course.image}
                    alt={course.name}
                  />
                </td> */}
                <td>
                  <Link to={`/admin/formcourse/${course._id}/edit`}>
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
