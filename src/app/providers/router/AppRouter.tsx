import { ROUTES, type RouteType } from "@/app/route";
import { Routes, Route } from "react-router";

export const Router = () => {
  const renderRoutes = (routes: RouteType[]) =>
    routes.map((route) => {
      const Layout =
        route.layout ||
        (({ children }: { children: React.ReactNode }) => <>{children}</>);//выводим пустышку, если рендерим родителя

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
