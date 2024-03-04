import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import routes from "./routes";
import NavBar from "./Components/NavBar/NavBar";
import store from './store'
import { Provider } from 'react-redux'


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>
);