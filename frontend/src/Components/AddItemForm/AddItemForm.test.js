import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddItemForm from './AdditemForm';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';


describe('AddItemForm', () => {
// Question - struggling to unit test with useSubmit hooks
    it('renders correctly', () => {
        const mockRoutes = [
            {
                path: "/create",
                element: <AddItemForm />,
                loader: () => FAKE_EVENT,
            }
        ]
        const { getByLabelText, getByText } = render(<AddItemForm />, {wrapper:BrowserRouter});

        expect(getByLabelText('Item')).toBeInTheDocument();
        expect(getByLabelText('Quantity')).toBeInTheDocument();
        expect(getByLabelText('Units')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

    it('calls the onSubmit function when the form is submitted', () => {
        const handleSubmit = jest.fn();
        const { getByText } = render(<AddItemForm />);

        fireEvent.click(getByText('Submit'));

        expect(handleSubmit).toHaveBeenCalled();
    });
});