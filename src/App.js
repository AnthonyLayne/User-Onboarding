import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import Form from "./Form";
import formSchema from "./formSchema";
import * as yup from "yup";

const formValue = {
  username: "",
  password: "",
  email: "",
  checked: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  checked: false,
};

function App() {
  const [formVal, setFormVal] = useState(formValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios
      .post(`https://reqres.in/api/users`, formVal)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => console.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormVal({ ...formVal, [name]: value });
  };

  return (
    <div className="App">
      <Form
        values={formVal}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
    </div>
  );
}

export default App;
