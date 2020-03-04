export const getTasks = () => fetch('http://localhost:3001/tasks').then(res => res.json());
