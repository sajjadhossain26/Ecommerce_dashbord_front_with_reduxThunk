import React, { useEffect, useState } from "react";
import doctor1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient1 from "../../assets/img/patients/patient1.jpg";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllPermissionData } from "../../features/user/userSlice";
import { useFormField } from "../../hooks/useFormField";
import { createRole, updatedRole } from "../../features/user/userApiSlice";
import { timeAgo } from "../../helpers/timeAgo";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/auth/authSlice";

const Role = () => {
  const [selected, setSelected] = useState([]);
  const [roleEdit, setRoleEdit] = useState([]);
  const dispatch = useDispatch();
  const { handleInputChange, input, formReset } = useFormField({
    name: "",
  });

  const { message, error, permission, role } =
    useSelector(getAllPermissionData);
  useEffect(() => {
    new DataTable(".datatable");
  });

  const handleCheckboxChange = (e) => {
    const val = e.target.value;
    const updateList = [...selected];

    if (selected.includes(val)) {
      updateList.splice(selected.indexOf(val), 1);
    } else {
      updateList.push(val);
    }
    setSelected(updateList);
  };

  const handleRoleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
      );
  };


  const handleEdit = (id) => {
    const findEdit = role.find((data) => data._id == id)
    setRoleEdit(findEdit)
    setSelected(findEdit.permissions)
  }
  console.log(selected);

  const handleRoleEditChange = (e) => {
    setRoleEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleRoleUpdate = (e) => {
     e.preventDefault()
     dispatch(updatedRole({id: roleEdit._id, name: roleEdit.name, permissions: selected}))
  }
  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      formReset();
      setSelected([])
    }
  }, [error, message]);


  return (
    <>
      <PageHeader title="Role" />
      <ModalPopup target="RoleModalPopUp">
        <form onSubmit={handleRoleCreate}>
          <div className="my-3">
            <label htmlFor="">Role Name {input.name}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={handleInputChange}
            />
            <h5 className="mt-3">Permissions</h5>

            {permission &&
              permission.map((item, index) => {
                return (
                  <label className="d-flex" key={index}>
                    <input
                      type="checkbox"
                      value={item.name}
                      checked={selected.includes(item.name)}
                      onChange={handleCheckboxChange}
                    />{" "}
                    &nbsp;
                    {item.name}
                  </label>
                );
              })}
          </div>
          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              Add new permission
            </button>
          </div>
        </form>
      </ModalPopup>

      {/* ///* Role Edit  */}
      <ModalPopup target="RoleEditPopUp">
        <form onSubmit={handleRoleUpdate}>
          <div className="my-3">
            <label htmlFor="">Role Name {roleEdit.name}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={roleEdit.name}
              onChange={handleRoleEditChange}
            />
            <h5 className="mt-3">Permissions</h5>
            {permission &&
              permission.map((item, index) => {
                return (
                  <label className="d-flex" key={index}>
                    <input
                      type="checkbox"
                      value={item.name}
                      checked={selected.includes(item.name)}
                      onChange={handleCheckboxChange}
                    />{" "}
                    &nbsp;
                    {item.name}
                  </label>
                );
              })}
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
                {role && (
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
                      {role && [...role].reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "40px" }}>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td><ul>{item.permissions.map((per, i) => {
                             return <li key={i}>{per}</li>
                            })}</ul></td>
                            <td>{timeAgo(item.createdAt)}</td>
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
                            <button className="btn btn-warning btn-sm" data-target="#RoleEditPopUp" data-toggle="modal" onClick={()=> handleEdit(item._id)}>
                                <i className="fa fa-edit"></i>
                              </button> &nbsp;
                              <button className="btn btn-danger btn-sm">
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
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
