import React from 'react';
import ItemDetails from './ItemDetails';
import ItemButtons from './ItemButtons';








function ShoppingListItem({item, index, toggleEditForm, editingIndex, deleteItem, toggleEditItemButton}) {
    <React.Fragment key = {item.id} >
        <ItemDetails item={item}/>
        <ItemButtons index={index} toggleEditForm={toggleEditForm} editingIndex={editingIndex} deleteItem={deleteItem} toggleEditItemButton={toggleEditItemButton} />
    </React.Fragment>
    

}
export default ShoppingListItem;