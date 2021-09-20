import React from "react";
import { FiPackage } from "react-icons/fi";
import { GoProject, GoRepo } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import "./nav.css";

const Nav: React.FC<{ total_repos: number }> = ({ total_repos }) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <BsBook size={18} className="nav-icon" />
          <span>Overview</span>
        </li>
        <li className="is-active">
          <GoRepo />
          <span>Repositories</span>
          <small className="repo-amount">{total_repos}</small>
        </li>
        <li>
          <GoProject size={18} className="nav-icon" />
          <span>Projects</span>
        </li>
        <li>
          <FiPackage size={18} className="nav-icon" />
          <span>Packages</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
