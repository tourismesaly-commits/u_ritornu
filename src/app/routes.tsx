import { createBrowserRouter } from "react-router"
import Site from "../App"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Site page="home" />,
  },
  {
    path: "/chambres",
    Component: () => <Site page="chambres" />,
  },
  {
    path: "/residence",
    Component: () => <Site page="residence" />,
  },
  {
    path: "/contact",
    Component: () => <Site page="contact" />,
  },
  {
    path: "*",
    Component: () => <Site page="home" />,
  },
])
