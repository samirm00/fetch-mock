const deleteTodo = async (id) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: 'DELETE'
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

export default deleteTodo;
