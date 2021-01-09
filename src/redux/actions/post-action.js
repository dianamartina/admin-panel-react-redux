
export function updatePostData(payload) {
    return {
        type: 'UPDATE_POST_DATA',
        payload
    }
}

export function updateUserPost(payload) {
    return {
        type: 'UPDATE_USER_POST',
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


export function addPosts() {
    return (dispatch) => {
        dispatch(startLoading());

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=> response.json())
            .then(posts => {
            const postsFilter = posts.filter(post => post.id < 6);
                dispatch(updatePostData(postsFilter))
            })
            .catch(error => {
            dispatch(updateError(error))
        })
    }
}