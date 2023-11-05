import React, { useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../features/auth/authApiSlice";
import { getAllpermission, getAllrole } from "../../features/user/userApiSlice";
import {
  allBrand,
  getAllCategory,
  getAllTag,
} from "../../features/product/productApiSlice";

const PageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(loggedInUser());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllpermission());
    dispatch(getAllrole());
    dispatch(allBrand());
    dispatch(getAllTag());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <>
      {/* <!-- Main Wrapper --> */}
      <div className="main-wrapper">
        <Header />

        <Sidebar />

        {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Outlet />
          </div>
        </div>
        {/* <!-- /Page Wrapper --> */}
      </div>
      {/* <!-- /Main Wrapper --> */}
    </>
  );
};

export default PageLayout;
