import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import AddItemForm from './AdditemForm';
import EditItemForm from './EditItemForm';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [displayAddItem, setDisplayAddItem] = useState(false);
    const [editingIndex, setEditingIndex] = useState();



    const getData = async () => {
        try {
            const response = await fetch('/shoppinglist');
            if (response.ok) {
                const responseData = await response.json();
                setItems(responseData);
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const toggleAddItemButton = () => setDisplayAddItem(prev => !prev);
    const toggleEditForm = (index) => {
        setEditingIndex(previndex => previndex === index ? null : index);
    }

    const toggleEditItemButton = () => setEditingIndex(null)

    const deleteItem = async (index) => {
        const itemToDelete = items[index];
        try {
            const response = await fetch(`/shoppinglist/${itemToDelete.id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                const newItems = items.filter((item, i) => i !== index);
                setItems(newItems);
            }
        } catch (error) {
            console.error('Failed to delete item:', error);
        }
    }


    useEffect(() => {
        getData();
    }, []);



    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Units</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit}</td>
                            <td>
                                <Button color="info" onClick={() => toggleEditForm(index)}>Edit</Button>
                            </td>
                            <td><Button color="danger" onClick={() => deleteItem(index)}>Delete</Button></td>
                            </tr>
                    
                            {editingIndex === index &&  (
                                <tr>
                                    <td colSpan={5}>
                                    <EditItemForm toggleEditItemButton={toggleEditItemButton} updateItemProp={setItems} item={item}/>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
                <br />
                <Button color="primary" onClick={toggleAddItemButton}>Add Item</Button>
            </Table>
            {displayAddItem && <AddItemForm toggleButton={toggleAddItemButton} addAnotherItemProp={setItems} />}
        </>
    );
}

export default ShoppingList;