import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingListTable from '../Components/ShoppingListTable/ShoppingListTable';
import { useSelector } from 'react-redux';

function ShoppingListTableContainer() {
    // const { items } = useLoaderData()
    const items = useSelector((state) => state.shoppingList.items)

    const count = useSelector((state) => state.counter.value)

    return (
        <>
            <ShoppingListTable items={Object.values(items)} />
            {count}
        </>
    );
}

export default ShoppingListTableContainer;