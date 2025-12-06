import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/AboutPage.jsx"

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    errorElement:(
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found </h1>
      </div>
    ),
    children:[
      {path: "/",element: <HomePage/>},
      {path: "about",element: <About/>},
      {path: "contact",element: <HomePage/>},
      {path: "playground",element: <HomePage/>},
      {path: "portfolio",element: <HomePage/>},
      {path: "resume",element: <HomePage/>},
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
