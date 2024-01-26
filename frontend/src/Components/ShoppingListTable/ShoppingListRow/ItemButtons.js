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
            action: "/delete",
        })
    }

    
    return (
        <>
            <td><Button color="info" onClick={() => handleEditClick(index)}>Edit</Button></td>

            <td><Button color='danger' onClick={()=> handleDeleteClick(item)}>Delete</Button></td>
        </>
    )
}

export default ItemButtons;