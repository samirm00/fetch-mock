import updateTodo from './updateTodo.js';

describe('updateTodo', () => {
    // Mock the global fetch function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('updates a todo successfully', async () => {
        const todoId = 1;
        const updatedTodo = { id: todoId, title: 'Updated Todo' };

        // Mock a successful PUT request response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => updatedTodo
        });

        const result = await updateTodo(todoId, updatedTodo);

        // Expect the result to be the updatedTodo data
        expect(result).toEqual(updatedTodo);
    });

    test('handles update error', async () => {
        const todoId = 1;
        const updatedTodo = { id: todoId, title: 'Updated Todo' };
        const errorMessage = 'Update failed';

        // Mock a PUT request that rejects with an error
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        // Spy on console.error to capture the error message
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const result = await updateTodo(todoId, updatedTodo);

        // Expect the result to be null (as defined in the catch block)
        expect(result).toBeNull();

        // Expect console.error to have been called with the error message
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
