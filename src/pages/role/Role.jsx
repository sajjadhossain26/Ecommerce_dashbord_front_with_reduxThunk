import React, { useEffect } from "react";
import doctor1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient1 from "../../assets/img/patients/patient1.jpg";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useSelector } from "react-redux";
import { getAllPermissionData } from "../../features/user/userSlice";
import { useFormField } from "../../hooks/useFormField";

const Role = () => {
  const {handleInputChange, input} = useFormField({
    name: ""
  })
  
  const {message, error, permission} = useSelector(getAllPermissionData)
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      <PageHeader title="Role" />
      <ModalPopup target="RoleModalPopUp">
        <form action="">
          <div className="my-3">
            <label htmlFor="">Role Name {input.name}</label>
            <input type="text"
            name="name"
            className="form-control"
            value={input.name}
            onChange={handleInputChange}
            />
            {
              permission && permission.map((item, index) => {
                return (
                  <label className="d-block" key={index}>
              <input type="checkbox" value={item.name}/> {item.name}
            </label>
                )
              })
            }
          
          </div>
          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              Add new permission
            </button>
          </div>
        </form>
      </ModalPopup>
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary mb-2"
            data-target="#RoleModalPopUp"
            data-toggle="modal"
          >
            Add New Role
          </button>
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-hover table-center mb-0 ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Role Name</th>
                      <th>Slug</th>
                      <th>Permissions</th>
                      <th>Created At</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "40px" }}>1</td>
                      <td>admin</td>
                      <td>admin</td>
                      <td>Author</td>
                      <td>2min ago</td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            checked
                          />
                          <label for="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">
                        <button className="btn btn-danger btn-sm">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- /Recent Orders --> */}
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default Role;
