import React from "react";
import { Alert } from "reactstrap";

const InlineError = ({ text }) => (
  <span>
    <Alert color="danger">{text}</Alert>
  </span>
);

export default InlineError;
