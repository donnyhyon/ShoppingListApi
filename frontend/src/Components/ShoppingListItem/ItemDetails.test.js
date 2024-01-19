import React from "react";
import { render } from '@testing-library/react';
import ItemDetails from "./ItemDetails";
import '@testing-library/jest-dom/extend-expect';



test("loads items correctly", () =>{
    const mockItem = {
        id: '1',
        name: 'Test Item1',
        quantity: '12',
        unit: 'kg'
    }

    const {getByText} = render(
        <table>
            <tbody>
                <tr>
                    <ItemDetails item={mockItem}/>
                </tr>
            </tbody>
        </table>
    )
    expect(getByText('Test Item1')).toBeInTheDocument();
    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('kg')).toBeInTheDocument();
})