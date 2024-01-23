import React, { useState } from 'react';
import { Button } from 'reactstrap';



function ItemButtons({handleEditClick, index, handleDeleteClick}) {
    
    return (
        <>
            <td><Button color="info" onClick={() => handleEditClick(index)}>Edit</Button></td>
            <td><Button color="danger" onClick={() => handleDeleteClick(index)}>Remove</Button></td>
        </>
    )
}

export default ItemButtons;