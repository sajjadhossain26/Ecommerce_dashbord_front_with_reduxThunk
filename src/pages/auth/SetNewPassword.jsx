import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createToast } from "../../utils/toast";
import { newPassword } from "../../features/auth/authApiSlice";
import { setMessageEmpty } from "../../features/auth/authSlice";



const SetNewPassword = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate()
  const {error, message, user} = useSelector((state) => state.auth)
  const [input, setInput] = useState({
    password: '',
    confirm_password: ''
  })

  const handleInputChange = (e) => {
     setInput((prevState) => ({
     ...prevState,
     [e.target.name] : e.target.value
  }))
  }

  const handNewPassword = (e) => {
   e.preventDefault()
  //  validation
     if(input.password != input.confirm_password){
      createToast("Password not match!")
     }else{
      dispatch(newPassword(input))
      setMessageEmpty()
      navigate('/login')
     }
 
  } 

    useEffect(() => {
    if(error){

      createToast(error)
    }
    if(message){
      createToast(message, "success")

    }
   
  }, [error, message, user])


 
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              {/* <img className="img-fluid" src={logoWhite} alt="Logo" /> */}
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Set New password</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {/* <!-- Form --> */}
                <form onSubmit={handNewPassword}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New Password"
                      name="password"
                      value={input.password}
                      onChange={handleInputChange}
                    />
                    <br/>

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={input.confirm_password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Reset
                    </button>
                  </div>
                </form>
                {/* <!-- /Form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
