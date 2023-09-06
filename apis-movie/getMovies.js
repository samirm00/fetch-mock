import baseUrl from './data.js';

const getMovies = async () => {
    try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getMovies;
