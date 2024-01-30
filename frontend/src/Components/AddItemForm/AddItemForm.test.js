import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddItemForm from './AdditemForm';
import customRenderer from '../../Utils/customRenderer';




describe('AddItemForm', () => {
    it('renders correctly', () => {
        const mockRoutes = [
            {
                path: "/create",
                element: <AddItemForm />,
                loader: () => FAKE_EVENT,
            }
        ]
        // const { getByLabelText, getByText } = render(<AddItemForm />, {wrapper:MemoryRouter});

        const { getByLabelText, getByText } = customRenderer(<AddItemForm />);

        expect(getByLabelText('Item')).toBeInTheDocument();
        expect(getByLabelText('Quantity')).toBeInTheDocument();
        expect(getByLabelText('Units')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

});