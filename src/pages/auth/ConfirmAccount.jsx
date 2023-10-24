import React, { useEffect, useState } from 'react'
// import logoWhite from "../../assets/img/logo-white.png";
import { Link, useNavigate } from 'react-router-dom';
import { resetCodeConfirm } from '../../features/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createToast } from '../../utils/toast';
import logoWhite from "../../assets/img/logo-white.png";
import Cookies from 'js-cookie'
import { setMessageEmpty } from '../../features/auth/authSlice';



const ConfirmAccount = () => {

    const [input, setInput] = useState()
    const dispatch = useDispatch()
    const {user, message, error} = useSelector((state) => state.auth)
    const navigate = useNavigate()
  


    const handleResetSubmit = (e) => {
      e.preventDefault()
      dispatch(resetCodeConfirm({code: input}))
    }

    useEffect(() => {
        if(error) {
            createToast(error)
          dispatch(setMessageEmpty())

        }
        if(message) {
          createToast(message, 'success')
            dispatch(setMessageEmpty())
            navigate("/new_password")

        }
        
    },[message, error])

    console.log("code",Cookies.get('findUser'));
  return (
    <div>
       <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                {/* <img className="img-fluid" src={logoWhite} alt="Logo" /> */}
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Confirm Your account</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleResetSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="verification code"
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
                        Confirm
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
    </div>
  )
}

export default ConfirmAccount
