

const shoppingListLoader = async () => {
    try {
        const response = await fetch('/shoppinglist');
        if (response.ok) {
            const responseData = await response.json();
            return {items: responseData};
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.log(error);
    }
};

export default shoppingListLoader;