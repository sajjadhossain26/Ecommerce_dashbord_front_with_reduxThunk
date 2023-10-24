// create public router

import ConfirmAccount from "../pages/auth/ConfirmAccount";
import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SetNewPassword from "../pages/auth/SetNewPassword";
import PublicGard from "./publicGard";

const publicRouter = [
   {
     element: <PublicGard/>,
     children: [
        {
        path:"/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/forgot",
        element: <Forgot/>
    },
    {
        path: "/confirm_account",
        element: <ConfirmAccount/>
    },
    {
        path: "/new_password",
        element: <SetNewPassword/>
    }
    ]
   }
];

// export router
export default publicRouter;