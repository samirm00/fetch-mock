const getTodos = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!res.ok) {
            throw new Error(
                `Failed to fetch todos with status : ${res.status}`
            );
        }

        return res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getTodos;
