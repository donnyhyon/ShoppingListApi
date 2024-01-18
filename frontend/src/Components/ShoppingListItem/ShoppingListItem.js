import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import EditItemForm from '../EditItemForm/EditItemForm';





function ShoppingListItem({item, index, toggleEditForm, editingIndex, deleteItem, toggleEditItemButton}) {
    const setItems = ()=> {};
    
    return (
        <React.Fragment key={item.id}>
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
            <td>
                <Button color="info" onClick={() => toggleEditForm(index)}>Edit</Button>
            </td>
            <td><Button color="danger" onClick={() => deleteItem(index)}>Remove</Button></td>
            </tr>
    
            {editingIndex === index &&  (
                <tr key={"editing_"+ index}>
                    <td colSpan={5}>
                    <EditItemForm toggleEditItemButton={toggleEditItemButton} updateItemProp={setItems} item={item}/>
                    </td>
                </tr>
            )}
    </React.Fragment> 
    )
}

export default ShoppingListItem;