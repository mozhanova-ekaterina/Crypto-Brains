import { Home } from "@/pages/Home";
import { PATHS } from "./paths";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Register } from "@/pages/Auth/Register";
import { Login } from "@/pages/Auth/Login";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Auth } from "@/pages/Auth";

export type RouteType = {
  path: string; 
  component: React.ComponentType;
  children?: RouteType[];
  layout?: React.ComponentType<{ children: React.ReactNode }>;
};

export const ROUTES: RouteType[] = [
  { path: PATHS.HOME, component: Home, layout: MainLayout },
  {
    path: PATHS.AUTH.ROOT,
    component: Auth,
    children: [
      { path: PATHS.AUTH.REGISTER, component: Register, layout: AuthLayout },
      { path: PATHS.AUTH.LOGIN, component: Login, layout: AuthLayout },
    ],
  },
];
