import React, { useState } from 'react';
import { Table } from 'reactstrap';
import AddItemForm from '../AddItemForm/AdditemForm';
import ShoppingListRow from './ShoppingListRow/ShoppingListRow';

function ShoppingListTable({ items }) {
    const [editingIndex, setEditingIndex] = useState();
    const toggleEditForm = (index) => setEditingIndex(previndex => previndex === index ? null : index);
    const handleEditClick = (index) => toggleEditForm(index)

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
                        <ShoppingListRow item={item} index ={index} handleEditClick={handleEditClick} editingIndex={editingIndex} />
                    ))}
                </tbody>
            </Table>

        </>
    );
}

export default ShoppingListTable;