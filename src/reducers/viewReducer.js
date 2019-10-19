import { CHANGE_VIEW } from '../actions/types'

const initialState = {
    view: 'real' //real or historical
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.view,
            }
        default:
            return state;
    }
}