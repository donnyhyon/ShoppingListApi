import React from "react";
import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function customRenderer(component, otherProps) {
    const routes = [
        {
            id: 'page.component',
            index: '/',
            element: component
        }
    ];
    const router = createBrowserRouter(routes);
    return render(<RouterProvider router={router} />, otherProps);
}

export default customRenderer;