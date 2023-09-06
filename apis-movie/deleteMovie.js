import baseUrl from './data.js';

const deleteMovie = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        if (res.status === 200) {
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default deleteMovie;
