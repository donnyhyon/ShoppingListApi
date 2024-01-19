import React from 'react';
import ItemDetails from './ItemDetails';
import ItemButtons from './ItemButtons';



function ShoppingListItem({item, index, handleEditClick}) {
    return(
    <React.Fragment key = {item.id} >
        <ItemDetails item={item}/>
        <ItemButtons index={index}  handleEditClick={handleEditClick} />
    </React.Fragment>
    )

}

export default ShoppingListItem;