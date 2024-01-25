import React from 'react';
import EditItemForm from '../../EditItemForm/EditItemForm';
import ItemDetails from './ItemDetails';
import ItemButtons from './ItemButtons';


function ShoppingListRow({ item, index, handleEditClick, editingIndex,  toggleEditItemButton }) {
    const setItems = () => { };
    
    return (
        <>
            <tr>
                <ItemDetails item={item}/>
                <ItemButtons index={index} item={item} handleEditClick={handleEditClick}  />
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