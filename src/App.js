import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import FormCourse from "./pages/FormCourse";
import Dashboard from "./pages/Dashboard";
import FormEditCourse from "./pages/FormEditCourse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/course-form/create" component={FormCourse} />
        <Route
          exact
          path="/admin/course-form/:id/edit"
          component={FormEditCourse}
        />
      </Switch>
    </div>
  );
}

export default App;
