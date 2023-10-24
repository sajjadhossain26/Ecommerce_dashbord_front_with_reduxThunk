import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="">
                <Link to="/" href="index.html">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                <i class="fe fe-cart"></i> <span>Orders</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                  <i className="fe fe-bolt"></i> <span>Products</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                <i class="fa fa-filter"></i> <span>Category</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                  <i className="fa fa-tags"></i> <span>Tag</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                <i class="fa fa-briefcase"></i> <span>Brands</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users" href="index.html">
                  <i className="fe fe-user"></i> <span>Users</span>
                </Link>
              </li>
              <li className="">
                <Link to="/role" href="index.html">
                  <i className="fa fa-anchor"></i> <span>Roles</span>
                </Link>
              </li>
              <li className="">
                <Link to="/permission" href="index.html">
                  <i className="fa fa-lock"></i> <span>Permissions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default Sidebar;
