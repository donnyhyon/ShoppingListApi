import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemButtons from './ItemButtons';

test('renders buttons and handles click events', async () => {
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

    const editButton = getByText('edit');
    const removeButton = getByText('Remove');

    expect(editButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();

    await act(async()=> {fireEvent.click(editButton)});
    
    expect(editButton.textContent).toBe("editing");

    expect(mockHandleEditClick).toHaveBeenCalledWith(index);
});
