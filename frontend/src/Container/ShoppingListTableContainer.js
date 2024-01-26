import React, { useState } from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';
import NavBar from '../Components/NavBar/NavBar';


function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    return (
        <>
            <NavBar />
            <ShoppingListTable items={items}/>
        </>
    );
}

export default ShoppingListTableContainer;