import React from "react";
import { Row, Col, Label, Input, Button } from 'reactstrap'
import { Form } from "react-router-dom";

function AddItemForm() {

    return (
        <Form method="POST" action="/">
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