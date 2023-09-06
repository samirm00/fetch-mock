const updateTodo = async (id, newTodo) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            }
        );
        if (!res.ok) {
            throw new Error(
                `Failed to fetch users with status : ${res.status}`
            );
        }

        return res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default updateTodo;
