import AddItemForm from "./Components/AddItemForm/AdditemForm";
import addItemAction from "./Components/AddItemForm/addItemAction";
import EditItemForm from "./Components/EditItemForm/EditItemForm";
import editItemAction from "./Components/EditItemForm/editItemAction";
import HomePage from "./Components/Pages/Recipes/HomePage";
import ItemButtons from "./Components/ShoppingListTable/ShoppingListRow/ItemButtons";
import deleteItemAction from "./Components/ShoppingListTable/ShoppingListRow/deleteItemAction";
import shoppingListLoader from "./Components/ShoppingListTable/shoppingListLoader";
import ShoppingListTableContainer from "./Container/ShoppingListTableContainer";
// Question - confusion vs setting up proxy, and setting up routes. 
const routes = [
  {
    path: "/shoppinglist",
    element: <ShoppingListTableContainer/>,
    loader: shoppingListLoader,
    children: [
      {
        path: "/shoppinglist/create",
        element: <AddItemForm />,
        action: addItemAction,
        
      },
      {
        path: "/shoppinglist/delete",
        element: <ItemButtons />,
        action: deleteItemAction,
      },
      {
        path: "/shoppinglist/edit",
        element: <EditItemForm />,
        action: editItemAction,
      },

    ]
  },
  { 
    path: "/",
    element: <HomePage />,
  }
];

export default routes;