import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import AddItemForm from './AdditemForm';
import customRenderer from '../../Utils/customRenderer';




describe('AddItemForm', () => {
    it('renders correctly', () => {
        const { getByLabelText, getByText } = customRenderer(<AddItemForm />);

        expect(getByLabelText('Item')).toBeInTheDocument();
        expect(getByLabelText('Quantity')).toBeInTheDocument();
        expect(getByLabelText('Units')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

});