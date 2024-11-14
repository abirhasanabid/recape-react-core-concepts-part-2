import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="">
            <h2>Users : {users.length}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;