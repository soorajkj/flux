import { Route } from "~types/layout";

export const hrefs = {
  root: "/",
  signup: "/signup",
  signin: "/signin",
  dashboard: "/dashboard",
  todos: "/dashboard/todos",
  account: "/dashboard/account",
  settings: "dashboard/setttings",
};

export const routes: Route[] = [
  {
    name: "home",
    url: hrefs.dashboard,
    icon: "home",
  },
  {
    name: "todos",
    url: hrefs.todos,
    icon: "task",
  },
  {
    name: "account",
    url: hrefs.account,
    icon: "user",
  },
  {
    name: "setttings",
    url: hrefs.settings,
    icon: "settings",
  },
];
