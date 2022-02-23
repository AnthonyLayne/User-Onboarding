import React from "react";

const Form = (props) => {
  const { change, submit, errors } = props;
  const { username, email, password, terms } = props.values;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    change(name, newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div>
      <h1>Please Input Your Information</h1>
      <p>{errors.username}</p>
      <p>{errors.password}</p>
      <p>{errors.email}</p>
      <p>{errors.terms}</p>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms of Service
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={onChange}
          />
        </label>
        <label>
          Submit
          <input type="submit" value="creating a user" />
        </label>
      </form>
    </div>
  );
};

export default Form;
// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.
