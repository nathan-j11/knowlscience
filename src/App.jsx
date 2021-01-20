import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import FormCourse from "./components/Forms/FormCourse";
import FormEditCourse from "./components/Forms/FormEditCourse";

import TableCourses from "./components/TableCourses";



function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/admin/formcourse/create" component={FormCourse} />
        <Route exact path="/admin/formcourse/:id/edit" component={FormEditCourse} />
        <Route exact path="/courses" component={TableCourses} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
