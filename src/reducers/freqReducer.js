import { GET_UPDATE_FREQ, SET_UPDATE_FREQ } from '../actions/types'

const initialState = {
    freq: 1000
}

export default function (state = initialState, action) {
  
    switch (action.type) {

        case GET_UPDATE_FREQ:
            console.log(action.freq)
            return {
                ...state,
                freq: action.freq,
            }

        case SET_UPDATE_FREQ:
        console.log(action.freq)
        return {
            ...state,
            freq: action.freq,
        }

        default:
            return state;
    }
}