import postTodo from './postTodo.js';

describe('postTodo', () => {
    // Mock the global fetch function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('posts a todo successfully', async () => {
        const newTodo = { title: 'New Todo' };
        const fakeResponse = { id: 201, ...newTodo };

        // Mock a successful post response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => fakeResponse
        });

        const result = await postTodo(newTodo);

        // Expect the result to be the fakeResponse data
        expect(result).toEqual(fakeResponse);
    });

    test('handles post error', async () => {
        const newTodo = { title: 'New Todo' };
        const errorMessage = 'Post failed';

        // Mock a post request that rejects with an error
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        // Spy on console.error to capture the error message
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const result = await postTodo(newTodo);

        // Expect the result to be null (as defined in the catch block)
        expect(result).toBeNull();

        // Expect console.error to have been called with the error message
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
