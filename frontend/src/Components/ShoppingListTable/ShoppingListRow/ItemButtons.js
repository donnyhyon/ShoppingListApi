import React from 'react';
import { Button } from 'reactstrap';
import { useSubmit } from 'react-router-dom';

function ItemButtons({handleEditClick, index, item}) {
    const submit = useSubmit();
    
    const handleDeleteClick=(item) => {
        submit(
            item,
            {
            method: "DELETE",
            action: "/shoppinglist/delete",
        })
    }

    
    return (
        <>
            <td><Button data-testId="ItemButtons.EditButton" color="info" onClick={() => handleEditClick(index)}>Edit</Button></td>

            <td><Button data-testId="ItemButtons.DeleteButton" color='danger' onClick={()=> handleDeleteClick(item)}>Delete</Button></td>
        </>
    )
}

export default ItemButtons;