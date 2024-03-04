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
import { increment, decrement } from "./counterSlice";


const router = createBrowserRouter(routes);



ReactDOM.createRoot(document.getElementById("root")).render(

  //dispatch action in this location- loads items upon loading page.
  <React.StrictMode>
    <NavBar />
    //Create a wrapper to wrap around prvider that initiates the get calls.
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>
);