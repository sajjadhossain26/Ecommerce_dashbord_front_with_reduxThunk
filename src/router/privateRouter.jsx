// create private router

import PageLayout from "../components/PageLayout/PageLayout";
import Brand from "../pages/brand/Brand";
import Category from "../pages/category/Category";
import Dashborad from "../pages/dashboard/Dashborad";
import Permission from "../pages/permission/Permission";
import Role from "../pages/role/Role";
import Tag from "../pages/tag/Tag";
import User from "../pages/user/User";
import PrivateGard from "./privateGard";

const privateRouter = [
  {
    element: <PageLayout />,
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
          {
            path: "/brand",
            element: <Brand />,
          },
          {
            path: "/tag",
            element: <Tag />,
          },
          {
            path: "/category",
            element: <Category />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
