import { Home } from "@/pages/Home";
import { PATHS } from "./paths";
import { Auth } from "@/pages/Auth";
import { AuthLayout } from "./layouts/AuthLayout";

export type RouteType = {
  path: string; 
  component: React.ComponentType;
  children?: RouteType[];
  layout?: React.ComponentType<{ children: React.ReactNode }>;
};

export const ROUTES: RouteType[] = [
  { path: PATHS.HOME, component: Home },
  {
    path: PATHS.AUTH.ROOT,
    component: Auth,
    layout: AuthLayout,
    children: [
      { path: PATHS.AUTH.REGISTER, component: Auth },
      { path: PATHS.AUTH.LOGIN, component: Auth },
    ],
  },
];
