const initialState = {
    showUsersPosts: true
  }
export function switchReducer(state = initialState, action) {
    // console.log('action.type=', action.type);
    switch (action.type) {

        case 'SHOW_USERS_LIST':
            return{
                ...state,
                showUsersPosts: true
            }

        case 'SHOW_POSTS_LIST':
            return{
                ...state,
                showUsersPosts: false
            }

        default:
            return state;
    }
}