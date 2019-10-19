import { SET_THRESHOLD } from '../actions/types'

const initialState = {
    threshold: 1000
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_THRESHOLD:
            return {
                ...state,
                threshold: action.threshold
            }

        default:
            return state;
    }
}