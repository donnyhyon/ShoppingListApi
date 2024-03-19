import React from "react";
import AddItemForm from "./Components/AddItemForm/AdditemForm";
import addItemAction from "./Components/AddItemForm/addItemAction";
import EditItemForm from "./Components/EditItemForm/EditItemForm";
import editItemAction from "./Components/EditItemForm/editItemAction";
import PageLayout from "./Components/Pages/PageLayout";
import RecipePage from "./Components/Pages/Recipes/RecipePage";
import ItemButtons from "./Components/ShoppingListTable/ShoppingListRow/ItemButtons";
import deleteItemAction from "./Components/ShoppingListTable/ShoppingListRow/deleteItemAction";
import shoppingListLoader from "./Components/ShoppingListTable/shoppingListLoader";
import ShoppingListTableContainer from "./Container/ShoppingListTableContainer";
import Counter from "./Components/Counter/Counter";

const routes = [
  { 
    path: "/",
    element: <PageLayout />,
    children: [
      { 
        path: "shoppinglist",
        element: <ShoppingListTableContainer/>,
        loader: shoppingListLoader,
        children: [
          {
            path: "create",
            element: <AddItemForm />,
            action: addItemAction,
          },
          {
            path: "delete",
            element: <ItemButtons />,
            action: deleteItemAction,
          },
          {
            path: "edit",
            element: <EditItemForm />,
            action: editItemAction,
          },
        ]
      },
      { 
        path: "recipes",
        element: <RecipePage />,
      },
      { 
        path: "counter",
        element: <Counter />,
      },
    ]
  },
];

export default routes;