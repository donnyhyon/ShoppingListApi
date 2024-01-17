import shoppingListLoader from "./Components/ShoppingList/shoppingListLoader";
import ShoppingListContainer from "./Container/ShoppingListcontainer";

const routes = [
  {
    path: "/",
    element: <ShoppingListContainer/>,
    loader: shoppingListLoader,
  },
];

export default routes;