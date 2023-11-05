import React, { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";

import { useFormField } from "../../hooks/useFormField";
import { timeAgo } from "../../helpers/timeAgo";
import {
  createBrand,
  deleteBrand,
} from "../../features/product/productApiSlice";
import {
  getAllProduct,
  setMessageEmpty,
} from "../../features/product/productSlice";
import { createToast } from "../../utils/toast";

const Brand = () => {
  const { message, error, brand, loader } = useSelector(getAllProduct);
  const dispatch = useDispatch();
  const [logo, setLogo] = useState(null);
  const [logoPrev, setLogoPrev] = useState(null);
  const [search, setSearch] = useState("");
  const { handleInputChange, input, formReset } = useFormField({
    name: "",
  });

  const handleLogoPreview = (e) => {
    setLogo(e.target.files[0]);
    setLogoPrev(URL.createObjectURL(e.target.files[0]));
  };

  const handleBrandCreate = (e) => {
    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("logo", logo);
    e.preventDefault();
    dispatch(createBrand(form_data));

    formReset();
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleDeleteBrand = (id) => {
    swal({
      title: "Sure?",
      text: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const columns = [
    {
      name: "Brand Logo",
      selector: (row) => (
        <img
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          src={row.logo}
        />
      ),
    },
    {
      name: "Brand Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },

    {
      name: "Brand Name",
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
  return (
    <>
      <PageHeader title="Role" />
      <ModalPopup target="BrandModalPopUp">
        <form onSubmit={handleBrandCreate}>
          <div className="my-3">
            <label htmlFor="">Brand Name {input.name}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          {logo && (
            <div className="my-3">
              <img
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                src={logoPrev}
                alt=""
              />
            </div>
          )}
          <div className="my-3">
            <label htmlFor="">Brand Logo {input.name}</label>
            <input
              type="file"
              name="logo"
              className="form-control"
              onChange={(e) => handleLogoPreview(e)}
            />
          </div>
          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              {loader ? " Creating...." : "Add new brand"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary mb-2"
            data-target="#BrandModalPopUp"
            data-toggle="modal"
          >
            Add New brand
          </button>
          <br />
          <DataTable
            title="All Brands Data"
            className="shadow-sm"
            columns={columns}
            data={brand ? brand : []}
            selectableRows
            highlightOnHover
            pagination
            subHeader
            subHeaderComponent={
              <input
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => handleSearch(e)}
                className="form-control"
                style={{ width: "200px" }}
              ></input>
            }
          />
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default Brand;
