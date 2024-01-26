import React from "react";
import { Col, Input, Label } from "reactstrap";

function InputField({label,name, placeholderText }) {
    return(
        <Col>
            <Label>
                {label}
            </Label>
            <Input
                id={name}
                name={name}
                placeholder={placeholderText}
            />
        </Col>
    )
}

export default InputField;