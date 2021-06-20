import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class UserWidget extends React.Component {
  render() {
    return (
      <div
        className="row justify-content-end"
        style={{ fontSize: "3em", color: "White" }}
      >
        <FontAwesomeIcon icon={faUser} />
      </div>
    );
  }
}

export default UserWidget;
