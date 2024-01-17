import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingList from '../Components/ShoppingList/ShoppingList';



// TODO look into implementing react-testing library for get data
// mocking out 

// next big chunk- looking into using ACTIONS to handle forms, then use "action data" to render into components, rather than load data...


// mock out loader data
// delete will submit form... look into ACTIONS, then action data will modify components...



// Pass in props into shopping list
// Router points end point to component +  Loader... holds the api calls


function ShoppingListContainer() {
    const { items } = useLoaderData()
    const [displayAddItem, setDisplayAddItem] = useState(false);
    const [editingIndex, setEditingIndex] = useState();

    const toggleAddItemButton = () => setDisplayAddItem(prev => !prev);
    const toggleEditForm = (index) => {
        setEditingIndex(previndex => previndex === index ? null : index);
    }

    const toggleEditItemButton = () => setEditingIndex(null)

    const deleteItem = async (index) => {
        const itemToDelete = items[index];
        try {
            const response = await fetch(`/shoppinglist/${itemToDelete.id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                const newItems = items.filter((item, i) => i !== index);
                // setItems(newItems);
            }
        } catch (error) {
            console.error('Failed to delete item:', error);
        }
    }


    return (
        <>
            <ShoppingList items={items} displayAddItem={displayAddItem} toggleAddItemButton={toggleAddItemButton} toggleEditForm={toggleEditForm} deleteItem={deleteItem} toggleEditItemButton={toggleEditItemButton} editingIndex={editingIndex}/>
        </>
    );
}

export default ShoppingListContainer;