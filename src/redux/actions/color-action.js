export function colorChange(event) {
    return {
        type: 'COLOR_CHANGE',
        payload: event.target.value
    }
}

export function backgroundColorChange(event) {
    return {
        type: 'BACKGROUND_COLOR_CHANGE',
        payload: event.target.value
    }
}



// handleColorChange(event) {
//     this.setState({color:event.target.value});
//   } 