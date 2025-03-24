import {Dashboard} from "../../containers/dashboard/Dashboard";
import {BlogPosts} from "../../containers/blog/BlogPosts";
import {Projects} from "../../containers/projects/Projects";
import {JSX} from "react";

export enum ROUTE_PATHS {
  DASHBOARD = "/",
  BLOG = "/blog",
  PROJECTS = "/projects",
}

export type RouteConfig = {
  path: ROUTE_PATHS;
  element?: JSX.Element;
};

export const ROUTES: RouteConfig[] = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTE_PATHS.BLOG,
    element: <BlogPosts />,
  },
  {
    path: ROUTE_PATHS.PROJECTS,
    element: <Projects/>,
  },
];
