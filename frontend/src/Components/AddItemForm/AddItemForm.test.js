import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import AddItemForm from './AdditemForm';
import customRenderer from '../../Utils/customRenderer';




describe('AddItemForm', () => {
    it('renders correctly', () => {
        const { getByTestId } = customRenderer(<AddItemForm />);

        const addItemForm = getByTestId("AddItemForm.form");
        const itemInputField = getByTestId("InputField.item");
        const quantityInputField = getByTestId("InputField.quantity");
        const unitInputField = getByTestId("InputField.unit");
        const formButton = getByTestId("AddItemForm.submitButton");


        expect(addItemForm).toBeInTheDocument();
        expect(itemInputField).toBeInTheDocument();
        expect(quantityInputField).toBeInTheDocument();
        expect(unitInputField).toBeInTheDocument();
        expect(formButton).toBeInTheDocument();
    });

});