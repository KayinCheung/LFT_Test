import { GET_HISTORICAL, LOADING_HISTORICAL } from '../actions/types'

const initialState = {
    data: [],
    startTime: 0,
    endTime: 0,
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HISTORICAL:
            return {
                ...state,
                data: action.data,
                startTime: action.startTime,
                endTime: action.endTime,
                loading: false
            }
        case LOADING_HISTORICAL:
        return {
            ...state,
            loading: true
        }

        default:
            return state;
    }
}