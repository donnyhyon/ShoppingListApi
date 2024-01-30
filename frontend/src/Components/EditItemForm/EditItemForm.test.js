import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import customRenderer from '../../Utils/customRenderer';
import EditItemForm from './EditItemForm';
import { screen} from '@testing-library/react'



describe('EditItemForm', () => {
    it('renders correctly', () => {

        const mockItem = {
            id: 1,
            name: "Old Item",
            quantity: 999,
            unit: "grams"
        }
        const { getByTestId } = customRenderer(<EditItemForm item={mockItem}/>);

        const inputName = getByTestId("EditItemForm.name");
        const inputQuantity = getByTestId("EditItemForm.quantity");
        const inputUnit = getByTestId("EditItemForm.unit");


        expect(inputName).toBeInTheDocument();
        expect(inputQuantity).toBeInTheDocument();
        expect(inputUnit).toBeInTheDocument();
    });

});