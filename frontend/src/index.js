import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);