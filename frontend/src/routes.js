import React from "react";
import AddItemForm from "./Components/AddItemForm/AdditemForm";
import addItemAction from "./Components/AddItemForm/addItemAction";
import EditItemForm from "./Components/EditItemForm/EditItemForm";
import editItemAction from "./Components/EditItemForm/editItemAction";
import ItemButtons from "./Components/ShoppingListTable/ShoppingListRow/ItemButtons";
import deleteItemAction from "./Components/ShoppingListTable/ShoppingListRow/deleteItemAction";
import shoppingListLoader from "./Components/ShoppingListTable/shoppingListLoader";
import ShoppingListTableContainer from "./Container/ShoppingListTableContainer";

const routes = [
  {
    path: "/",
    element: <ShoppingListTableContainer/>,
    loader: shoppingListLoader,
    children: [
      {
        path: "/create",
        element: <AddItemForm />,
        action: addItemAction,
      },
      {
        path: "/delete",
        element: <ItemButtons />,
        action: deleteItemAction,
      },
      {
        path: "/edit",
        element: <EditItemForm />,
        action: editItemAction,
      },           
    ]
  },
];

export default routes;