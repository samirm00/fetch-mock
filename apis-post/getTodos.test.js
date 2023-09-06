import getTodos from './getTodos.js';

describe('getUsers', () => {
    // Mock the global fetch function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetches todos successfully', async () => {
        const fakeTodos = [
            { id: 1, name: 'todo 1' },
            { id: 2, name: 'todo 2' }
        ];

        // Mock a successful fetch response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => fakeTodos
        });

        const result = await getTodos();
        expect(result).toEqual(fakeTodos);
    });

    test('handles fetch error', async () => {
        const errorMessage = 'Fetch failed';

        // Mock a fetch that rejects with an error
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        // Spy on console.error to capture the error message
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const result = await getTodos();

        // Expect the result to be null (as defined in the catch block)
        expect(result).toBeNull();

        // Expect console.error to have been called with the error message
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
