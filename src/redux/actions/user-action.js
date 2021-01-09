
export function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function startLoading() {
    return {
        type: 'START_LOADING'
       
    }
}

export function updateError(payload) {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}

export function deleteUser(payload) {
    return {
        type: 'DELETE_USER',
        payload
    }
}

export function addUsers() {
    return (dispatch) => {
        dispatch(startLoading());

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {
                const usersFilter = users.filter(user => user.id < 6);
                users.forEach(user => {
                        user.isGoldClient = false;
                        });
                dispatch(updateUserData(usersFilter))
            })
            .catch(error => {
            dispatch(updateError(error))
        })
    }
}

// fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     const usersFilter = users.filter(user => user.id < 6);
    //     users.forEach(user => {
    //       user.isGoldClient = false;
    //     });
    //     this.setState({users: usersFilter});
    //   })