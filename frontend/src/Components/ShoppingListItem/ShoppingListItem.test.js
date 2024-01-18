import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { render } from '@testing-library/react';


test("loads items correctly", () =>{
    const mockItem = {
        id: '1',
        name: 'Test Item1',
        quantity: '12',
        unit: 'kg'
    }

    const mockToggleEditForm = jest.fn();
    const mockEditingIndex = null;
    const mockDeleteItem = jest.fn();
    const mockToggleEditItemButton = jest.fn();

    const {getByText} = render(
    <ShoppingListItem
        item={mockItem}
        index={0}
        toggleEditForm={mockToggleEditForm}
        editingIndex={null}
        deleteItem={mockDeleteItem}
        toggleEditItemButton={mockToggleEditItemButton}
        />
    )
    expect(getByText('Test Item')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('kg')).toBeInTheDocument();
})