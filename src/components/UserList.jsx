import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

function UserList(props) {
    // console.log(props);
    const { users, salary, img, alt} = props;
    
    return (
        <div className="app-boxes user-list">
            <h2>Users list:</h2>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salary={salary}
                    img={img}
                    alt={alt}
                    key={ index }
                    // deleteUser={deleteUser}// functie ce se paseaza ca prop de la parinte catre nepot(UserItem)
                />
            })}
        </div>
    );
}

export default UserList;