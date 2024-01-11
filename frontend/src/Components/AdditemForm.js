import React from "react";
import { Form, Row, Col, Label, Input, Button } from 'reactstrap'

function AddItemForm() {
    return (
        <Form action='shoppinglist/new'>
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
                    <Button>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddItemForm;