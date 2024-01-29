import React from "react";
import { Col, Input, Label } from "reactstrap";

function InputField({label,name, placeholderText }) {
    return(
        <Col>
            <Label>
                {label}
                <Input
                id={name}
                name={name}
                placeholder={placeholderText}
            />
            </Label>

        </Col>
    )
}

export default InputField;