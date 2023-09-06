import fetchMock from 'fetch-mock';
import baseUrl from './data.js';
import getMovies from './getMovies.js';

describe('getMovies function', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    test('should send a GET request and return data on success', async () => {
        const mockMovies = [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' }
        ];

        fetchMock.get(baseUrl, {
            status: 200,
            body: mockMovies
        });

        const response = await getMovies();
        expect(response).toEqual(mockMovies);
    });

    test('should handle errors gracefully', async () => {
        fetchMock.get(baseUrl, {
            status: 500
        });

        const response = await getMovies();
        expect(response).toBeNull();
    });
});
