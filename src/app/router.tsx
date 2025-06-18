import { useRoutes } from "react-router-dom";

import { homeRoutes } from "@/modules/home";
import { CssBaseline } from "@mui/material";
import { Outlet, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element: (
      <>
        <CssBaseline />
        <Outlet />
      </>
    ),
    children: [
      {
        children: homeRoutes,
      },
    ],
  },
];

export const AppRouter = () => {
  const route = useRoutes(routes);

  return route;
};
