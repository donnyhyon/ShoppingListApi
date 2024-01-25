import React, { useState } from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';


function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    const [editingIndex, setEditingIndex] = useState();

    const toggleEditForm = (index) => {
        setEditingIndex(previndex => previndex === index ? null : index);
    }

    const handleEditClick = (index) => toggleEditForm(index)


    const toggleEditItemButton = () => setEditingIndex(null)





    return (
        <>
            <ShoppingListTable items={items}  toggleEditForm={toggleEditForm} toggleEditItemButton={toggleEditItemButton} editingIndex={editingIndex} handleEditClick={handleEditClick}/>
        </>
    );
}

export default ShoppingListTableContainer;