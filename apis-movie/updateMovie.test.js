import fetchMock from 'fetch-mock';
import baseUrl from './data.js';
import updateMovie from './updateMovie.js';

describe('updateMovie function', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should send a PUT request with the correct ID and data', async () => {
        const movieId = 123;
        const updateUrl = `${baseUrl}/${movieId}`;
        const newMovie = { title: 'Updated Movie', year: 2024 };

        fetchMock.put(updateUrl, {
            status: 200,
            body: newMovie
        });

        const response = await updateMovie(movieId, newMovie);
        expect(response).toEqual(newMovie);
    });

    it('should handle errors gracefully', async () => {
        const movieId = 456;
        const updateUrl = `${baseUrl}/${movieId}`;
        const newMovie = { title: 'Updated Movie', year: 2024 };

        fetchMock.put(updateUrl, {
            status: 500
        });

        const response = await updateMovie(movieId, newMovie);
        expect(response).toBeNull();
    });
});
