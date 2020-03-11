export const getTasks = () => fetch('http://localhost:3001/tasks').then(res => res.json());
export const getTask = (id) => fetch(`http://localhost:3001/task?id=${id}`).then(res => res.json());
export const updateTask = (id, task) =>
    fetch(`http://localhost:3001/task/update`, {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ id, task }),
        headers: {
            'Content-Type': 'application/json'
        },
    });


