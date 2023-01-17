import React from "react";
import { Link } from "react-router-dom";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>
          The page you are looking for does not exists
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
