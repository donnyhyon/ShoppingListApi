import ShoppingList from "./Components/ShoppingList/ShoppingList";
import shoppingListLoader from "./Components/ShoppingList/shoppingListLoader";

const routes = [
  {
    path: "/",
    element: <ShoppingList/>,
    loader: shoppingListLoader,
  },
];

export default routes;