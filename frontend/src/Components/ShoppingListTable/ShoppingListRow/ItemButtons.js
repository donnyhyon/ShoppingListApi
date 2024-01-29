import React from 'react';
import { Button } from 'reactstrap';
import { useSubmit } from 'react-router-dom';

// Cannot see how to initiate an action without a form... So I am ending up wrapping my Buttons in Forms, is this best practise?


function ItemButtons({handleEditClick, index, item}) {
    const submit = useSubmit();
    
    const handleDeleteClick=(item) => {
        submit(
            item,
            {
            method: "DELETE",
            action: "/delete",
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