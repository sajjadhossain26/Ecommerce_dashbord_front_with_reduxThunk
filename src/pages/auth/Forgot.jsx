import React, { useEffect, useState } from "react";
// import logoWhite from "../../assets/img/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findResetUser } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/auth/authSlice";

const Forgot = () => {
  const [input, setInput] = useState()
  const {error, message} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleResetSubmit = (e) => {
    e.preventDefault()

   dispatch(findResetUser({email: input}))
  }

  useEffect(() => {
    if(error){
      createToast(error)
      dispatch(setMessageEmpty())

    }
    if(message){
      createToast(message, "success")
      dispatch(setMessageEmpty())

      navigate('/confirm_account')
    }
  },[error, message])


  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                {/* <img className="img-fluid" src={logoWhite} alt="Logo" /> */}
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleResetSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <Link to="/login" href="register.html">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
