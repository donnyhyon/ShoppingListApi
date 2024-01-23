import shoppingListLoader from "./Components/ShoppingListTable/shoppingListLoader";
import ShoppingListTableContainer from "./Container/ShoppingListTableContainer";

const routes = [
  {
    path: "/",
    element: <ShoppingListTableContainer/>,
    loader: shoppingListLoader,
  },
];

export default routes;