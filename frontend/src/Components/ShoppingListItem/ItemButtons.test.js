import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemButtons from './ItemButtons';

test('renders buttons and handles click events', () => {
    const mockHandleEditClick = jest.fn();
    const index = 0;

    const { getByText } = render(
        <table>
            <tbody>
                <tr>
                    <ItemButtons index={index} handleEditClick={mockHandleEditClick} />
                </tr>
            </tbody>
        </table>
    );

    const editButton = getByText('Edit');
    const removeButton = getByText('Remove');

    expect(editButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(editButton);

    expect(mockHandleEditClick).toHaveBeenCalledWith(index);
});
