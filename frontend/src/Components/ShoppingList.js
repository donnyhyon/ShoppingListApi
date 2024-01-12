import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import AddItemForm from './AdditemForm';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [displayAddItem, setDisplayAddItem] = useState(false);

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
                    <tr key={"row_"+index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td><Button color="info">Edit</Button></td>
                        <td><Button color="danger" onClick={() => deleteItem(index)}>Delete</Button></td>
                    </tr>
                ))}
            </tbody>
            <br/>
            <Button color="primary" onClick={()=>setDisplayAddItem(prev => !prev) }>Add Item</Button>
        </Table>
        {displayAddItem && <AddItemForm/>}
        </>
    );
}

export default ShoppingList;