const initialState = {
    color:'#8A4E97',
    backgroudColor:'#270C2D'
  }

export function colorReducer(state=initialState, action) {
    switch(action.type) {
        case 'COLOR_CHANGE':
            return {
                ...state, color: action.payload
            }

        case 'BACKGROUND_COLOR_CHANGE':
            return {
                ...state, backgroudColor: action.payload
            }
        
        default:
            return state
    }
}