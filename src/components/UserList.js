import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState'
import {
    Table,
    Button
} from 'reactstrap';

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    console.log(users);
    return (
        <>
            <h1>User List</h1>
            <Table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th className="text-center" style={{width: '170px'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <Link className="btn btn-warning m-1" to={`/edit/${user.id}`}>Edit</Link>
                                <Button onClick={() => removeUser(user.id)} className="btn btn-danger m-1">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
