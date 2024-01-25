import { redirect } from "react-router-dom";

const addItemAction = async ({request}) => {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries())

    try {
        const response = await fetch('/shoppinglist/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            // return null;
            return redirect("/");

        } else {
            throw new Error('request failed!');
        }} 
    catch (error) {
            console.error(error)
        }

}

export default addItemAction;
