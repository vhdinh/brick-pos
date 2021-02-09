import React, { useEffect, useState } from 'react';
import { UsersProps } from './Users.types';
import { UsersWrapper } from './Users.style';
import { withErrorBoundary } from '../withErrorBoundary';
import axios from 'axios';

function Users(props?: UsersProps) {
    const [users, setUsers] = useState<UsersProps[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get('http://localhost:5000/users')
            .then((res) => {
                console.log('users', res);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log('err', err);
            })
    };

    const renderUsers = () => {
        if (users) {
            return users.map((user) => {
                return <li key={user._id}>{user.first_name} {user.last_name} <button onClick={() => deleteUser(user._id)}>Delete</button></li>
            })
        }
    }

    const deleteUser = async (userId: string) => {
        console.log('going to delete', userId);
        await axios.delete(`http://localhost:5000/users/delete/${userId}`)
            .then((res) => {
                console.log('success delete', res);
                setUsers(users.filter((user) => {
                    return user._id !== userId;
                }));
            })
            .catch((err) => console.log('error delete', err))
    }

    return (
        <UsersWrapper data-testid={'Users-wrapper'}>
            <ul>
                {renderUsers()}
            </ul>
        </UsersWrapper>
    );
}

export default withErrorBoundary(Users);
