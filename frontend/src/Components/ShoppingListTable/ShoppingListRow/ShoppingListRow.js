import React from 'react';
import EditItemForm from '../../EditItemForm/EditItemForm';
import ItemDetails from './ItemDetails';
import ItemButtons from './ItemButtons';
import { Counter } from '../../Counter/Counter';


function ShoppingListRow({ item, index, handleEditClick, editingIndex }) {
   
    return (
        <>
            <Counter />
            <tr>
                <ItemDetails item={item}/>
                <ItemButtons index={index} item={item} handleEditClick={handleEditClick}  />
            </tr>
            {editingIndex === index && (
                <tr key={"editing_" + index}>
                    <td colSpan={5}>
                        <EditItemForm item={item} />
                    </td>
                </tr>
            )}
        </>
    )
}

export default ShoppingListRow;