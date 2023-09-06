import deleteTodo from './deleteTodo.js';

describe('deleteTodo', () => {
    let originalFetch;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn();
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    test('deletes a todo successfully', async () => {
        const todoId = 1;
        const mockResponse = {
            ok: true,
            json: async () => ({
                id: todoId,
                message: 'Todo deleted successfully'
            })
        };

        global.fetch.mockResolvedValueOnce(mockResponse);

        const result = await deleteTodo(todoId);
        const expected = await mockResponse.json();

        expect(result).toEqual(expected);
    });

    test('handles delete error', async () => {
        const todoId = 1;
        const errorMessage = 'Delete failed';

        // Mock a delete request that rejects with an error
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        // Capture console.error output using a mock function
        const consoleErrorMock = jest.spyOn(console, 'error');
        consoleErrorMock.mockImplementation(() => {});

        const result = await deleteTodo(todoId);

        // Assert that the result is null
        expect(result).toBeNull();

        // Assert that console.error was called with the expected error message
        expect(consoleErrorMock).toHaveBeenCalledWith(new Error(errorMessage));

        // Restore console.error to its original implementation
        consoleErrorMock.mockRestore();
    });
});
