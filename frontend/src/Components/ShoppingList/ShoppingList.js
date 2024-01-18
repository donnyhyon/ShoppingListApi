import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import AddItemForm from '../AddItemForm/AdditemForm';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';


// TODO look into implementing react-testing library for get data
// mocking out 

// next big chunk- looking into using ACTIONS to handle forms, then use "action data" to render into components, rather than load data...


// mock out loader data
// delete will submit form... look into ACTIONS, then action data will modify components...



// Pass in props into shopping list
// Router points end point to component +  Loader... holds the api calls


function ShoppingList({items, displayAddItem,toggleAddItemButton, toggleEditForm, editingIndex, deleteItem, toggleEditItemButton}) {

    const setItems = ()=> {};

// Question- For UI testing, I want to separate JSX components 
    return (
        <>
        <h1>Shopping List</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Units</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <ShoppingListItem item={item} index={index} toggleEditForm={toggleEditForm} editingIndex={editingIndex} deleteItem={deleteItem} toggleEditItemButton={toggleEditItemButton} />
                    ))}
                </tbody>
            </Table>
            <Button color="primary" onClick={toggleAddItemButton}>Add Item</Button>
            {displayAddItem && <AddItemForm toggleButton={toggleAddItemButton} addAnotherItemProp={setItems} />}
        </>
    );
}

export default ShoppingList;