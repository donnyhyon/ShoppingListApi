import AddItemForm from "./Components/AddItemForm/AdditemForm";
import addItemAction from "./Components/AddItemForm/addItemAction";
import shoppingListLoader from "./Components/ShoppingListTable/shoppingListLoader";
import ShoppingListTableContainer from "./Container/ShoppingListTableContainer";

const routes = [
  {
    path: "/",
    element: <ShoppingListTableContainer/>,
    loader: shoppingListLoader,
    children: [
      {
        path: "/",
        element: <AddItemForm />,
        action: addItemAction,
      }
    ]
  },
];

export default routes;