import React, { useState } from "react";
import { Form, Row, Col, Label, Input, Button } from 'reactstrap'

// break out handlesubmit method, 

// action fired by react router, when submit the form

// react router useSubmit

function EditItemForm(props) {
    // initial items
    const { id, name, quantity, unit } = props.item;
    //rename draft / temp state 
    const [updatedItem, setUpdatedItem] = useState({ id, name, quantity, unit });

    const handleChange = (event) => {
        setUpdatedItem({ ...updatedItem, [event.target.name]: event.target.value });
    }

    const updateItem = (id, putResponse) => {
        props.updateItemProp(prevItems => prevItems.map(item => item.id === id ? putResponse : item));
    }

    // submit hook will submit the form to itself
    // action will then take that data and hit the API
    // look to loader. 
    // router 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/shoppinglist/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            });

            if (response.ok) {
                const responseData = await response.json();
                updateItem(id, responseData)
                props.toggleEditItemButton();

            } else {
                throw new Error('Update failed')
            }
        }
        catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <Col>

                        <Input
                            id="name"
                            name="name"
                            placeholder={name}
                            value={updatedItem.name}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Input
                            id="quantity"
                            name="quantity"
                            placeholder={quantity}
                            value={updatedItem.quantity}
                            onChange={handleChange}


                        />
                    </Col>
                    <Col>
                        <Input
                            id="unit"
                            name="unit"
                            placeholder={unit}
                            value={updatedItem.unit}
                            onChange={handleChange}

                        />
                    </Col>

                    <Col>
                        <Button color="warning" type="submit">
                            Update
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>

    )
}

export default EditItemForm;