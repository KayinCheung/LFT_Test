import { SET_THRESHOLD } from './types'


export const setThreshold = (value) => dispatch => {

    dispatch({
        type: SET_THRESHOLD,
        threshold: value,
    })


}
