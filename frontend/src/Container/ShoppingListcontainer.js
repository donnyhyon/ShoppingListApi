import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingList from '../Components/ShoppingList/ShoppingList';


function ShoppingListContainer() {
    const { items } = useLoaderData()
    const [displayAddItem, setDisplayAddItem] = useState(false);
    const [editingIndex, setEditingIndex] = useState();

    const toggleAddItemButton = () => setDisplayAddItem(prev => !prev);
    const toggleEditForm = (index) => {
        setEditingIndex(previndex => previndex === index ? null : index);
    }

    const handleEditClick = (index) => toggleEditForm(index)

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

    // const handleDeleteClick = (index) => deleteItem(index)


    return (
        <>
            <ShoppingList items={items} displayAddItem={displayAddItem} toggleAddItemButton={toggleAddItemButton} toggleEditForm={toggleEditForm} deleteItem={deleteItem} toggleEditItemButton={toggleEditItemButton} editingIndex={editingIndex} handleEditClick={handleEditClick}/>
        </>
    );
}

export default ShoppingListContainer;