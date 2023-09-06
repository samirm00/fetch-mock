const postTodo = async (todo) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
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

export default postTodo;
