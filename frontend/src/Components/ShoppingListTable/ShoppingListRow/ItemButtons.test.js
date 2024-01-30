import React from 'react';
import { render, fireEvent, act, getByTestId, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemButtons from './ItemButtons';
import customRenderer from '../../../Utils/customRenderer';

test('renders buttons and handles click events', async () => {
    const mockHandleEditClick = jest.fn();
    const index = 0;



    const { getByTestId } = customRenderer(
        <table>
            <tbody>
                <tr>
                    <ItemButtons index={index} handleEditClick={mockHandleEditClick} />
                </tr>
            </tbody>
        </table>
    );

    const editButton = getByTestId("ItemButtons.EditButton");
    const removeButton = getByTestId("ItemButtons.DeleteButton");

    expect(editButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();

    await act(async()=> {fireEvent.click(editButton)});
    

    expect(mockHandleEditClick).toHaveBeenCalledWith(index);
});
