import React from "react";
import { screen } from '@testing-library/react';
import ItemDetails from "./ItemDetails";
import '@testing-library/jest-dom/extend-expect';
import customRenderer from '../../../Utils/customRenderer';




test("loads items correctly", () =>{
    const mockItem = {
        id: '1',
        name: 'Test Item1',
        quantity: '12',
        unit: 'kg'
    }

    customRenderer(
        <table>
            <tbody>
                <tr>
                    <ItemDetails item={mockItem}/>
                </tr>
            </tbody>
        </table>
    )
    expect(screen.getByText('Test Item1')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('kg')).toBeInTheDocument();
})