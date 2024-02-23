import { Route } from "~types/layout";

export const map = {
  root: "/",
  signout: "/signout",
  signin: "/signin",
  dashboard: "/dashboard",
  todos: "/dashboard/todos",
  account: "/dashboard/account",
  settings: "dashboard/setttings",
};

export const routes: Route[] = [
  {
    name: "home",
    url: map.dashboard,
    icon: "home",
  },
  {
    name: "todos",
    url: map.todos,
    icon: "task",
  },
  {
    name: "account",
    url: map.account,
    icon: "user",
  },
  {
    name: "setttings",
    url: map.settings,
    icon: "settings",
  },
];
