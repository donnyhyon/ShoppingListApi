import React, { useState } from 'react';
import { Button } from 'reactstrap';



function ItemButtons({handleEditClick, index}) {
    const [caption, setCaption] = useState("edit");
    const handleClick = () => {
        handleEditClick(index)
        setCaption("editing");
    }
    return (
        <>
            <td><Button color="info" onClick={handleClick}>{caption}</Button></td>
            <td><Button color="danger">Remove</Button></td>
        </>
    )
}

export default ItemButtons;