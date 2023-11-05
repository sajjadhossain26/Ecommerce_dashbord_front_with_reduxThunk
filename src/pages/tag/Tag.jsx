import React, { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";

import { useFormField } from "../../hooks/useFormField";
import { timeAgo } from "../../helpers/timeAgo";
import DataTable from "react-data-table-component";

import {
  getAllProduct,
  setMessageEmpty,
} from "../../features/product/productSlice";
import { createToast } from "../../utils/toast";
import { createTag } from "../../features/product/productApiSlice";

const Tag = () => {
  const { message, error, tag, loader } = useSelector(getAllProduct);
  const dispatch = useDispatch();
  const { handleInputChange, input, formReset } = useFormField({
    name: "",
  });

  const handleTagCreate = (e) => {
    e.preventDefault();
    dispatch(createTag({ name: input.name }));
  };

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

  const columns = [
    {
      name: "Tag Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },

    {
      name: "Created At",
      selector: (row) => timeAgo(row.createdAt),
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="status-toggle">
          <input type="checkbox" id="status_1" className="check" checked />
          <label for="status_1" className="checktoggle">
            checkbox
          </label>
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <button
            className="btn btn-warning btn-sm"
            data-target="#RoleEditPopUp"
            data-toggle="modal"
          >
            <i className="fa fa-edit"></i>
          </button>{" "}
          &nbsp;
          <button className="btn btn-danger btn-sm">
            <i className="fa fa-trash"></i>
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Tag" />
      <ModalPopup target="TagModalPopUp">
        <form onSubmit={handleTagCreate}>
          <div className="my-3">
            <label htmlFor="">Tag Name </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              {loader ? " Creating...." : "Add new Tag"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary mb-2"
            data-target="#TagModalPopUp"
            data-toggle="modal"
          >
            Add New Tag
          </button>
          <br />
          <DataTable
            title="All Tag Data"
            className="shadow-sm"
            columns={columns}
            data={tag ? tag : []}
            selectableRows
            highlightOnHover
            pagination
          />
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default Tag;
