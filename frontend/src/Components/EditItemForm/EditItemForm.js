import React, { useState } from "react";
import { useSubmit } from "react-router-dom";
import {Form, Row, Col, Label, Input, Button } from 'reactstrap'
import editItemAction from "./editItemAction";


function EditItemForm(props) {
    const { id, name, quantity, unit } = props.item;
    const [draftItem, setDraftItem] = useState({ id, name, quantity, unit });

    const handleChange = (event) => {
        setDraftItem({ ...draftItem, [event.target.name]: event.target.value });
    }

    const submit = useSubmit();
    const handleSubmit = () => {
        submit(
            draftItem,
            {
                method: "put",
                action: "/edit",
            }
        )
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
                            value={draftItem.name}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Input
                            id="quantity"
                            name="quantity"
                            placeholder={quantity}
                            value={draftItem.quantity}
                            onChange={handleChange}


                        />
                    </Col>
                    <Col>
                        <Input
                            id="unit"
                            name="unit"
                            placeholder={unit}
                            value={draftItem.unit}
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