import getTodo from './getTodo.js';

describe('getTodo', () => {
    // Mock the global fetch function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetches a todo successfully', async () => {
        const todoId = 1;
        const fakeTodo = { id: todoId, title: 'Sample Todo' };

        // Mock a successful fetch response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => fakeTodo
        });

        const result = await getTodo(todoId);

        // Expect the result to be the fakeTodo data
        expect(result).toEqual(fakeTodo);
    });

    test('handles fetch error', async () => {
        const todoId = 1;
        const errorMessage = 'Fetch failed';

        // Mock a fetch that rejects with an error
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        // Spy on console.error to capture the error message
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const result = await getTodo(todoId);

        // Expect the result to be null (as defined in the catch block)
        expect(result).toBeNull();

        // Expect console.error to have been called with the error message
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
