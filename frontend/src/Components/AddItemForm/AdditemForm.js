import React, { Fragment } from "react";
import { Row, Button, Col } from 'reactstrap'
import { Form, useSubmit } from "react-router-dom";
import InputField from "./InputField/InputField";


function AddItemForm() {
    const submit = useSubmit();
    const handleSubmit = (event) => {
        event.preventDefault();
        submit(event.currentTarget.form);
        event.currentTarget.form.reset();
    }

    return (
        <Fragment>
            <h3> Add Item </h3>
            <Form data-testid="AddItemForm.form" method="POST" action="/create" >
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <InputField label="Item" name="item" placeholderText="Item" />
                    <InputField label="Quantity" name="quantity" placeholderText="Quantity" />
                    <InputField label="Units" name="unit" placeholderText="Units" />
                    <Col><br/><Button data-testid="AddItemForm.submitButton" type="submit" onClick={handleSubmit}>Submit</Button></Col>

                </Row>
            </Form>
            <br/>
        </Fragment>

    )
}

export default AddItemForm;