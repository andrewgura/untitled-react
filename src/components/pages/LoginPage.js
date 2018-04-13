import React from "react";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

//functional component
class LoginPage extends React.Component {
  submit = data => {
    this.props.login(data).then(() => this.props.history.push("/"));
  };

  submit = data => {
    return this.props.login(data).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
export default connect(null, { login })(LoginPage);
