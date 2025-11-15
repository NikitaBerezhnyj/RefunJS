import React from "react";
import App from "@/App";
import ErrorPage from "./error-page";

type PageModule = {
  default: React.ComponentType;
};

const flatPages = import.meta.glob<PageModule>("../pages/*.tsx", { eager: true });
const allowedFlatPages = ["../pages/index.tsx", "../pages/404.tsx"];

const invalidFlatPages = Object.keys(flatPages).filter(file => !allowedFlatPages.includes(file));

if (invalidFlatPages.length > 0) {
  console.warn(
    "[RefunJS Router] ⚠️ Flat page files detected:",
    invalidFlatPages,
    "\nUse folders with index.tsx instead (e.g. pages/about/index.tsx)"
  );
}

const NotFoundPage = flatPages["../pages/404.tsx"]?.default ?? ErrorPage;

const modules = import.meta.glob<PageModule>("../pages/**/index.tsx", { eager: true });

const routes = Object.entries(modules).map(([file, mod]) => {
  const relativePath = file.replace("../pages", "").replace(/\/index\.tsx$/, "");

  const path =
    relativePath
      .split("/")
      .filter(Boolean)
      .map(segment =>
        segment.startsWith("[") && segment.endsWith("]") ? `:${segment.slice(1, -1)}` : segment
      )
      .join("/") || "/";

  const Component = mod.default;
  return { path, element: <Component /> };
});

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      ...routes,
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
];
