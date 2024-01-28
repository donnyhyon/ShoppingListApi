import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';

function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    return (
        <>
            <ShoppingListTable items={items}/>
        </>
    );
}

export default ShoppingListTableContainer;