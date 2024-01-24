import React from 'react';
import { Table } from 'reactstrap';
import AddItemForm from '../AddItemForm/AdditemForm';
import ShoppingListRow from './ShoppingListRow/ShoppingListRow';



// TODO look into implementing react-testing library for get data
// mocking out 

// next big chunk- looking into using ACTIONS to handle forms, then use "action data" to render into components, rather than load data...


// mock out loader data
// delete will submit form... look into ACTIONS, then action data will modify components...



// Pass in props into shopping list
// Router points end point to component +  Loader... holds the api calls



function ShoppingListTable({ items, handleEditClick, handleDeleteClick, editingIndex,  toggleEditItemButton }) {

    return (
        <>
            <h3> Add Item </h3>
            <AddItemForm/>
            <br/>
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
                        <ShoppingListRow item={item} index ={index} handleEditClick={handleEditClick} editingIndex={editingIndex} toggleEditItemButton={toggleEditItemButton} />
                    ))}
                </tbody>
            </Table>

        </>
    );
}

export default ShoppingListTable;