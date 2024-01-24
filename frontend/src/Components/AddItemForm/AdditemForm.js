import React from "react";
import { Row, Col, Label, Input, Button } from 'reactstrap'
import { Form, useSubmit } from "react-router-dom";

// Question- problem with clearing the form using actions and react router's form. Had to re-implement useSubmit.. is this correct? is there a better way?

function AddItemForm() {
    const submit = useSubmit();
    const handleSubmit = (event) => {
        event.preventDefault();
        submit(event.currentTarget.form);
        event.currentTarget.form.reset();
    }

    return (
        <Form method="POST" action="/" >
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
                    <Button type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddItemForm;