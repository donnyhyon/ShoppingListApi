import React from 'react';



function ItemDetails({item}) {
    return (
        <React.Fragment>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
        </React.Fragment>
    )
}

export default ItemDetails;