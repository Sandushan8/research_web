import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import Documents from "./components/documents/Documents";
import Domain from "./components/domain/Domain";
import Features from "./components/features/Features";
import Home from "./components/home/Home";
import Introduction from "./components/introduction/Introduction";
import Milestones from "./components/milestones/Milestones";
import Team from "./components/team/Team";
import ToolsAndTechnologies from "./components/toolsAndTechnologies/ToolsAndTechnologies";

const routes = [
  {
    path: "/",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Home></Home>,
      </div>
    ),
  },
  {
    path: "/introduction",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Introduction></Introduction>,
      </div>
    ),
  },
  {
    path: "/domain",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Domain></Domain>,
      </div>
    ),
  },
  {
    path: "/milestones",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Milestones></Milestones>,
      </div>
    ),
  },
  {
    path: "/features",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Features></Features>,
      </div>
    ),
  },
  {
    path: "/documents",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Documents></Documents>,
      </div>
    ),
  },
  {
    path: "/domain",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Domain></Domain>,
      </div>
    ),
  },
  {
    path: "/tools",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <ToolsAndTechnologies></ToolsAndTechnologies>,
      </div>
    ),
  },
  {
    path: "/team",
    element: (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Header />
        <Team></Team>
      </div>
    ),
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
