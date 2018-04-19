import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import InlineError from "../messages/InlineError";

//class component
class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  //onChange to change value of input field, works with any input field
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    //Checking for errors with input fields
    const errors = this.validate(this.state.data);
    //if errors, display them, also remove existing errors if fixed
    this.setState({ errors });
    e.preventDefault();
    //Submit data if no errors, .submit goes to LoginPage
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors })); //if error with submit, get global error from server
    }
  };

  validate = data => {
    const errors = {};
    //if empty email input, add email error to error object
    if (!data.email) {
      errors.email = "email required";
    }
    //if empty password input, add password error to error object
    if (!data.password) {
      errors.password = "Password required";
    }
    return errors;
  };

  render() {
    //to avoid having to write this.state everytime
    const { data, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        {errors.global && <InlineError text={errors.global} />}
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            color="error"
            type="password"
            id="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
