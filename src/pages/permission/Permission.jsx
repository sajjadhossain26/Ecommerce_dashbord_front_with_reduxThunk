import React, { useEffect, useState } from "react";
import doctor1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient1 from "../../assets/img/patients/patient1.jpg";
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { createPermission, deletePermission, getAllpermission, statusPermission } from "../../features/user/userApiSlice";
import { getAllPermissionData, setMessageEmpty } from "../../features/user/userSlice";
import { createToast } from "../../utils/toast";
import swal from "sweetalert";
import { timeAgo } from "../../helpers/timeAgo";

const Permission = () => {
  const [input, setInput] = useState()
  const {permission, error, message} = useSelector(getAllPermissionData)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setInput((prevState) => ({
    ...prevState,
    [e.target.name] : e.target.value
 }))
 }
  const handleFormSubmit = (e) => {
     e.preventDefault()
     dispatch(createPermission({name: input}))
     setInput('')
  }

  useEffect(() => {
    new DataTable(".datatable");
  });




  const handleDeletepermission = (id) => {
    swal({
        title: "Sure?",
        text: "Are you sure?",
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            
            dispatch(deletePermission(id))
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }

  // Handle status update

  const handleStatusUpdate = (status, id) => {
    dispatch(statusPermission({status, id}))
  }


  useEffect(() => {
    if(error){
      createToast(error)
      dispatch(setMessageEmpty())
    }
    if(message){
      createToast(message, "success")
      dispatch(setMessageEmpty())
      
    }
   
  }, [error, message])


  
  return (
    <>
      <PageHeader title="Permission" />
      <ModalPopup target="PermissionModalPopUp">
        <form action="" onSubmit={handleFormSubmit}>
          <div className="my-3">
            <label htmlFor="">Permission Name</label>
            <input type="text" className="form-control" name="name" value={input} onChange={(e)=>setInput(e.target.value)}/>
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
            data-target="#PermissionModalPopUp"
            data-toggle="modal"
          >
            Add New Permission
          </button>
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                {
                    permission && <table className="datatable table table-hover table-center mb-0 ">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      permission &&
                       [...permission].reverse().map((item, index) => {
                          return (
                             <tr key={index}>
                              <td style={{ width: "40px" }}>{index+1}</td>
                              <td>{item.name}</td>
                              <td>{item.slug}</td>
                              <td>{timeAgo(item.createdAt)}</td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    checked = {item.status? true : false}
                                  />
                                  <label for="status_1" className="checktoggle" onClick={() =>handleStatusUpdate(item.status, item._id)}>
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td className="text-right">
                                <button onClick={()=>handleDeletepermission(item._id)} className="btn btn-danger btn-sm">
                                  <i className="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>)
                      })
                     }
                    </tbody>
                  </table>
                }
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

export default Permission;
