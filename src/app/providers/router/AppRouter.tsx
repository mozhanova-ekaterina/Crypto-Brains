import { MainLayout } from "@/app/layouts/MainLayout";
import { ROUTES, type RouteType } from "@/app/route";
import { Routes, Route } from "react-router";

export const Router = () => {
  const renderRoutes = (routes: RouteType[]) =>
    routes.map((route) => {
      const Layout = route.layout || MainLayout;

      return (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{<route.component />}</Layout>}
        >
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });

  return <Routes>{renderRoutes(ROUTES)}</Routes>;
};
