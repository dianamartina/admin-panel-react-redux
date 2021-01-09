const initialState = {
    data: [],
    loading: false,
    error: null
  }
export function userReducer(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_USER_DATA':
            return{
                ...state,
                data: action.payload
            }

        case 'START_LOADING':
            return{
                ...state,
                loading:true
            }

        case 'UPDATE_ERROR':
            return{
                ...state,
                error: action.payload
            }
        case 'DELETE_USER':
            return{
                ...state,
                data: state.data.filter(user => user.id !== action.payload.id)
            }

        default:
            return state;
    }
}