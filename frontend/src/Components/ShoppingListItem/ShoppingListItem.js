import React from 'react';
import { Table, Button } from 'reactstrap';





function ShoppingListItem({item, index, toggleEditForm, editingIndex, deleteItem, toggleEditItemButton}) {
    const setItems = ()=> {};
    
    return (
        <React.Fragment key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
            <td>
                <Button color="info" onClick={() => toggleEditForm(index)}>Edit</Button>
            </td>
            <td><Button color="danger" onClick={() => deleteItem(index)}>Remove</Button></td>
    

        </React.Fragment>   
    )
}

export default ShoppingListItem;