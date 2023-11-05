import React, { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";

import { useFormField } from "../../hooks/useFormField";
import { timeAgo } from "../../helpers/timeAgo";

import { createToast } from "../../utils/toast";
import { getAllProduct } from "../../features/product/productSlice";

const Category = () => {
  const { message, error, category, loader } = useSelector(getAllProduct);
  const dispatch = useDispatch();
  const { handleInputChange, input, formReset } = useFormField({
    name: "",
  });

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      formReset();
    }
  }, [error, message]);

  return (
    <>
      <PageHeader title="Role" />
      <ModalPopup target="CategoryModalPopUp">
        <form>
          <div className="my-3">
            <label htmlFor="">Category Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
            />
          </div>
          {/* {logo && (
            <div className="my-3">
              <img
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                src={logoPrev}
                alt=""
              />
            </div>
          )} */}

          <div className="my-3">
            <label htmlFor="">Parent category </label>
            <select
              name="select"
              className="form-control"
              id=""
              value={input.name}
            >
              <option value="">-- Select --</option>
              {category &&
                category.map((pcat, index) => {
                  return (
                    <option value={pcat._id} key={index}>
                      {pcat.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">Category Icon </label>
            <input
              type="text"
              name="icon"
              value={input.icon}
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Category Logo </label>
            <input type="file" name="logo" className="form-control" />
          </div>
          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              {loader ? " Creating...." : "Add new Category"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary mb-2"
            data-target="#CategoryModalPopUp"
            data-toggle="modal"
          >
            Add New brand
          </button>
          <br />
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default Category;
