
const addItemLoader = async ({request}) => {
    const data = await request.formData();

    try {
        const response = await fetch('/shoppinglist/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const responseData = await response.json();
            return responseData;

        } else {
            throw new Error('request failed!');
        }} 
    catch (error) {
            console.error(error)
        }

}

export default addItemLoader;
