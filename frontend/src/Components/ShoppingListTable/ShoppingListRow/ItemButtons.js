import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { redirect } from 'react-router-dom';
import {Button}



function ItemButtons({handleEditClick, index, item}) {
    const handleDeleteClick = (event) => {
        event.preventDefault();
        deleteItem(item);
        return redirect('/')
    }





    
    return (
        <>
            <td><Button color="info" onClick={() => handleEditClick(index)}>Edit</Button></td>
            <td><Button color="danger" onClick={handleDeleteClick}>Remove</Button></td>
        </>
    )
}

export default ItemButtons;