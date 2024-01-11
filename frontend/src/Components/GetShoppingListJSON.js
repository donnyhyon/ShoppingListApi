import React, { useState, useEffect } from 'react';

function ShoppingList() {
    const [data , setData] = useState();
    const [error , setError] = useState();


    const getData = async () => {
        try {
            const response = await fetch ('/shoppinglist');
            if (response.ok) {
                const jsonResponse = await response.json();
                setData(jsonResponse);
            }  else {
            throw new Error('Request failed');
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                <h2>Data from API:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : ( <p>Loading...</p>)}
        </div>
    );
}

export default ShoppingList;