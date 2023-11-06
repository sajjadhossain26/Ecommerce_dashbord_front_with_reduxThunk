import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../features/product/productSlice";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const Product = () => {
  const { message, error, product, loader } = useSelector(getAllProduct);
  const columns = [
    {
      name: "Product Photo",
      selector: (row) => (
        <img
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          src={row.logo}
        />
      ),
    },
    {
      name: "Product Name",
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
      <PageHeader title="Products" />

      <div className="row">
        <div className="col-md-12">
          <Link className="btn btn-primary mb-2" to="/create_product">
            Add New Product
          </Link>
          <br />
          <DataTable
            title="All Products Data"
            className="shadow-sm"
            columns={columns}
            data={product ? product : []}
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
          />
        </div>
      </div>
    </>
  );
};

export default Product;
