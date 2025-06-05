import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Error from "./pages/Error";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path:"/error",
          element: <Error/>
        }
      ],
    },
  ]
)

//Pages
//page for shorting url(home page) ongoing
//redirecting page.
//login and register users(auth)





