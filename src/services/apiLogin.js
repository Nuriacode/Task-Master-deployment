const dataApi = async (data) => {
    try {
        const response = await fetch ("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json'}
        });

        if(!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};

export default dataApi;