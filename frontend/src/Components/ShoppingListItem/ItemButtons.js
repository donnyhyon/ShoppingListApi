import React from 'react';
import { Button } from 'reactstrap';



function ItemButtons() {
    return (
        <>
            <td><Button color="info" onClick={() => toggleEditForm(index)}>Edit</Button></td>
            <td><Button color="danger" onClick={() => deleteItem(index)}>Remove</Button></td>
        </>
    )
}

export default ItemButtons;