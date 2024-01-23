import React from 'react';
import ShoppingListItem from './ShoppingListItem';
import EditItemForm from '../../EditItemForm/EditItemForm';


function ShoppingListRow({ item, index, handleEditClick, editingIndex,  toggleEditItemButton }) {
    const setItems = () => { };
    
    return (
        <>
            <tr>
                <ShoppingListItem index={index} item={item} handleEditClick={handleEditClick}  />
            </tr>
            {editingIndex === index && (
                <tr key={"editing_" + index}>
                    <td colSpan={5}>
                        <EditItemForm toggleEditItemButton={toggleEditItemButton} updateItemProp={setItems} item={item} />
                    </td>
                </tr>
            )}
        </>
    )
}

export default ShoppingListRow;