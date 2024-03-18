import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';
import { useSelector } from 'react-redux';

function ShoppingListTableContainer() {
    const { items } = useLoaderData()
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <ShoppingListTable items={items} />
            {count}
        </>
    );
}

export default ShoppingListTableContainer;