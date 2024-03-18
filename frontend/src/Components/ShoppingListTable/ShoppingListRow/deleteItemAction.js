    const deleteItemAction = async ({request}) => {
        const formData = await request.formData();
        const itemToDelete = Object.fromEntries(formData.entries())
        try {
            const response = await fetch(`/api/shoppinglist/${itemToDelete.id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                // return redirect("/shoppinglist");
            }
        } catch (error) {
            console.error('Failed to delete item:', error);
        }
        return null;
    }


export default deleteItemAction;