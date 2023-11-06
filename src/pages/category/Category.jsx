import React, { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";

import { useFormField } from "../../hooks/useFormField";
import { timeAgo } from "../../helpers/timeAgo";

import { createToast } from "../../utils/toast";
import {
  getAllProduct,
  setMessageEmpty,
} from "../../features/product/productSlice";
import { createCategorys } from "../../features/product/productApiSlice";

const Category = () => {
  const { message, error, category, loader } = useSelector(getAllProduct);
  const [catPrev, setCatPrev] = useState("");
  const dispatch = useDispatch();
  const { handleInputChange, input, formReset } = useFormField({
    name: "",
    parent: "",
    icon: "",
  });

  const columns = [
    {
      name: "Category Logo",
      selector: (row) => (
        <img
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          src={row.photo}
        />
      ),
    },
    {
      name: "Category Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Sub Category",
      selector: (row) => (
        <ul>
          {row.subCategory.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ),
    },
    {
      name: "Created",
      selector: (row) => timeAgo(row.createdAt),
      sortable: true,
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
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteBrand(row._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </>
      ),
    },
  ];

  const handleCatPrev = (e) => {
    setCatPrev(e.target.files[0]);
  };

  const handleCreateCategory = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("icon", input.icon);
    form_data.append("parentCategory", input.parent);
    form_data.append("catPhoto", catPrev);

    dispatch(createCategorys(form_data));
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

  return (
    <>
      <PageHeader title="Role" />
      <ModalPopup target="CategoryModalPopUp">
        <form onSubmit={handleCreateCategory}>
          <div className="my-3">
            <label htmlFor="">Category Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Parent category </label>
            <select
              name="parent"
              className="form-control"
              value={input.parent}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          {catPrev && (
            <div className="my-3">
              <img
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                src={catPrev ? URL.createObjectURL(catPrev) : ""}
                alt=""
              />
            </div>
          )}
          <div className="my-3">
            <label htmlFor="">Category Logo </label>
            <input
              type="file"
              name="logo"
              className="form-control"
              onChange={(e) => handleCatPrev(e)}
            />
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

          <DataTable
            title="All Brands Data"
            className="shadow-sm"
            columns={columns}
            data={category ? category : []}
            selectableRows
            highlightOnHover
            pagination
            subHeader
            subHeaderComponent={
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
                style={{ width: "200px" }}
              ></input>
            }
          ></DataTable>
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default Category;
