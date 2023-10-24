// create private router

import PageLayout from "../components/PageLayout/PageLayout";
import Dashborad from "../pages/dashboard/Dashborad";
import Permission from "../pages/permission/Permission";
import Role from "../pages/role/Role";
import User from "../pages/user/User";
import PrivateGard from "./privateGard";

const privateRouter = [
  {
    element: <PageLayout/>,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashborad />,
          },
          {
            path: "/users",
            element: <User />,
         },
         {
          path: "/role",
          element: <Role />,
       },
       {
        path: "/permission",
        element: <Permission />,
     },
    ],
  },
    ]
  }
];

// export router
export default privateRouter;
