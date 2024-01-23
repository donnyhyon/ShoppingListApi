import React, { useState } from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';


function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    const [displayAddItem, setDisplayAddItem] = useState(false);
    const [editingIndex, setEditingIndex] = useState();

    const toggleAddItemButton = () => setDisplayAddItem(prev => !prev);
    const toggleEditForm = (index) => {
        setEditingIndex(previndex => previndex === index ? null : index);
    }

    const handleEditClick = (index) => toggleEditForm(index)
    const handleDeleteClick = (index) => deleteItem(index)

    const toggleEditItemButton = () => setEditingIndex(null)


    const deleteItem = async (index) => {
        const itemToDelete = items[index];
        try {
            const response = await fetch(`/shoppinglist/${itemToDelete.id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                return redirect("/");
            }
        } catch (error) {
            console.error('Failed to delete item:', error);
        }
    }



    return (
        <>
            <ShoppingListTable items={items} handleDeleteClick={handleDeleteClick} displayAddItem={displayAddItem} toggleAddItemButton={toggleAddItemButton} toggleEditForm={toggleEditForm} deleteItem={deleteItem} toggleEditItemButton={toggleEditItemButton} editingIndex={editingIndex} handleEditClick={handleEditClick}/>
        </>
    );
}

export default ShoppingListTableContainer;