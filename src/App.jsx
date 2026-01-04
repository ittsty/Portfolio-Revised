import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PlayGroundPage from "./pages/PlaygroundPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";

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
      { path: "portfolio", element: <WorkPage /> },
      { path: "resume", element: <ResumePage /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
