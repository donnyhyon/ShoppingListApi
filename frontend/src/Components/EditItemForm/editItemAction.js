import { redirect } from "react-router-dom";

const editItemAction = async ({request}) => {
    const formData = await request.formData();
    const itemToUpdate = Object.fromEntries(formData.entries())
    //Question- feedback regarding the null returns
    try {
        const response = await fetch(`/shoppinglist/${itemToUpdate.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemToUpdate)
        });

        if (response.ok) {
            return redirect("/");
            // return null;

        } else {
            throw new Error('Update failed')
            
        }
    }
    catch (error) {
        console.error(error)
    }
    return null;

}

export default editItemAction;