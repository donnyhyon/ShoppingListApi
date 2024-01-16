import React from "react";
import { Form, Row, Col, Label, Input, Button } from 'reactstrap'

function AddItemForm({addAnotherItemProp, toggleButton}) {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newItem = {
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            unit: event.target.unit.value
        };        

        try {
            const response = await fetch('/shoppinglist/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            });
            if (response.ok) {
                const responseData = await response.json();
                addAnotherItemProp(previousItems => [...previousItems, responseData]);
                toggleButton();
                event.target.reset();

            } else {
                throw new Error('request failed!');
            }} 
        catch (error) {
                console.error(error)
            }
        }


    return (
        <Form onSubmit={handleSubmit}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                    <Label>
                        Item
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Item"
                    />
                </Col>
                <Col>
                    <Label>
                        Quantity
                    </Label>
                    <Input
                        id="quantity"
                        name="quantity"
                        placeholder="quantity"
                    />
                </Col>
                <Col>
                    <Label>
                        Units
                    </Label>
                    <Input
                        id="unit"
                        name="unit"
                        placeholder="units"
                    />
                </Col>

                <Col>
                <br/>
                    <Button type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddItemForm;