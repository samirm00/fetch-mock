import baseUrl from './data.js';

const addMovie = async (newMovie) => {
    try {
        const res = await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        });
        if (!res.ok) {
            const error = new Error(
                `Failed to fetch movies with status: ${res.status}`
            );
            error.status = res.status;
            throw error;
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default addMovie;
