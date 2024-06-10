import { Navbar } from "./components/navbar/navbar"
import "./layout.scss";
import { Login } from "./routes/login/login";
import { Singlepage } from "./routes/singlepage/singlepage";
import { Homepage } from "./routes/homePages/homepage";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { List } from "./routes/list/list";
import { Profile } from "./routes/Profile/profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage/>
    ),
  },
  {
    path: "list",
    element: (<List/>),
  },
  {
    path: "login",
    element: (
      <Login/>
    )
  },
  {
    path:"/:id",
    element: (
      <Singlepage/>
    )
  },
  {
    path:"profile",
    element: (
       <Profile/>
    )
  },
]);

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App