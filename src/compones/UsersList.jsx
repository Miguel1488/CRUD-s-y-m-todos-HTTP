import React from 'react';
import axios from 'axios';


const UsersList = ({ usersList, selectUser, getUsers }) => {

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getUsers())
    }




    return (
        <div className='containerCard'>

            <ul className='cards'>
                {
                    usersList.map(user => (
                        <li key={user.id} className='list'>
                            <h4>{user.first_name},{user.last_name}</h4>
                            <ul className='list'>
                                <li> <b>Email:</b>{user.email}</li>
                                <li> <b>Password:</b>{user.password}</li>
                                <li> <b>Birthday:</b>{user.birthday}</li>
                            </ul>
                            <button className='buttonForm' onClick={() => selectUser(user)}>Select</button>
                            <button className='buttonForm' onClick={() => deleteUser(user)}>Delete</button>
                        </li>

                    ))
                }
            </ul>
        </div>


    );
};

export default UsersList;