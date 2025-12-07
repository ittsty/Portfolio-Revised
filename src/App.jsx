import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PlayGroundPage from "./pages/PlaygroundPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found </h1>
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "playground", element: <PlayGroundPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "resume", element: <ResumePage /> },
    ],
  },
]);

export default function App() {

  return (
          <RouterProvider router={router} />
  );
}
