import baseUrl from './data.js';

const deleteMovie = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(
                `Failed to delete movies with status : ${res.status}`
            );
        }
        if (res.status === 200) {
            return 'movie is deleted';
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default deleteMovie;
