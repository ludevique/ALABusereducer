import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/file">File</Link>
        </li>
        <li>
          <Link to="/addtask">Add-task</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
