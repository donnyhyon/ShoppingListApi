import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import AddItemForm from '../AddItemForm/AdditemForm';
import EditItemForm from '../EditItemForm/EditItemForm';
import { useLoaderData } from 'react-router-dom';


// TODO look into implementing react-testing library for get data
// mocking out 

// next big chunk- looking into using ACTIONS to handle forms, then use "action data" to render into components, rather than load data...


// mock out loader data
// delete will submit form... look into ACTIONS, then action data will modify components...



// Pass in props into shopping list
// Router points end point to component +  Loader... holds the api calls


function ShoppingList(props) {

    const items = props.items;
    const toggleEditForm = props.toggleEditForm;
    const editingIndex = props.editingIndex;
    const deleteItem = props.deleteItem;
    const toggleAddItemButton = props.toggleAddItemButton;
    const setItems = ()=> {};
    const displayAddItem = props.displayAddItem
    const toggleEditItemButton = props.toggleEditItemButton


    return (
        <>
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
                        <>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit}</td>
                            <td>
                                <Button color="info" onClick={() => toggleEditForm(index)}>Edit</Button>
                            </td>
                            <td><Button color="danger" onClick={() => deleteItem(index)}>Remove</Button></td>
                            </tr>
                    
                            {editingIndex === index &&  (
                                <tr>
                                    <td colSpan={5}>
                                    <EditItemForm toggleEditItemButton={toggleEditItemButton} updateItemProp={setItems} item={item}/>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
                <br />
                <Button color="primary" onClick={toggleAddItemButton}>Add Item</Button>
            </Table>
            {displayAddItem && <AddItemForm toggleButton={toggleAddItemButton} addAnotherItemProp={setItems} />}
        </>
    );
}

export default ShoppingList;