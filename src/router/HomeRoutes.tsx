import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { ImageCrop } from "../components/pages/ImageCrop";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "/crop",
    exact: false,
    children: <ImageCrop />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
