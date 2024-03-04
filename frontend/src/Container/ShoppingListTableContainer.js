import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';

function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    const counter = useSelector((state) => { state.counter.value })
    return (
        <>
            <ShoppingListTable items={items} />
        </>
    );
}

export default ShoppingListTableContainer;