import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Whoops! This page does not exist.</h2>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default ErrorPage;
