import React from 'react';



function ItemDetails({item}) {
    return (
        <>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
        </>
    )
}

export default ItemDetails;