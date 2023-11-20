import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="nav">
      <ul className="linkBar">
        <li>
          <NavLink
            className="link"
            to="/short-blogging-app/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/short-blogging-app/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/short-blogging-app/newpost">
            NEWPOST
          </NavLink>
        </li>
      </ul>
      <form
        className="form"
        onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">searchposts</label>
        <input
          id="search"
          type="text"
          className="searchBar"
          placeholder="Search Posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Nav;
