import React, { Fragment } from "react";
import { Row, Button, Col } from 'reactstrap'
import { Form, useSubmit } from "react-router-dom";
import InputField from "./InputField/InputField";

// Question- problem with clearing the form using actions and react router's form. Had to re-implement useSubmit.. is this correct? is there a better way?

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
            <Form method="POST" action="/create" >
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <InputField label="Item" name="item" placeholderText="Item" />
                    <InputField label="Quantity" name="quantity" placeholderText="Quantity" />
                    <InputField label="Units" name="unit" placeholderText="Units" />
                    <Col><br/><Button type="submit" label="Submit" onClick={handleSubmit}>Submit</Button></Col>

                </Row>
            </Form>
            <br/>
        </Fragment>

    )
}

export default AddItemForm;