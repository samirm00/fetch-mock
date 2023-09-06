import fetchMock from 'fetch-mock';
import baseUrl from './data.js';
import addMovie from './addMovie.js';

describe('addMovie function', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    test('should send a POST request with the correct data', async () => {
        const newMovie = {
            title: 'Test Movie',
            year: 2023
        };

        fetchMock.post(`${baseUrl}`, {
            status: 201,
            body: newMovie
        });

        const response = await addMovie(newMovie);
        expect(response).toEqual(newMovie);
    });

    test('should handle errors gracefully', async () => {
        const newMovie = {
            title: 'Test Movie',
            year: 2023
        };

        fetchMock.post(`${baseUrl}`, {
            status: 500
        });

        const response = await addMovie(newMovie);
        expect(response).toBeNull();
    });
});
