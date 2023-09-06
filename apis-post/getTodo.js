const getTodo = async (id) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        if (!res.ok) {
            throw new Error(
                `Failed to fetch todos with status : ${res.status}`
            );
        }

        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getTodo;
