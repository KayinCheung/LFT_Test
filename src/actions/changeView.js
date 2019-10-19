import { CHANGE_VIEW } from './types'


export const changeView = (view) => dispatch => {
    dispatch({
        type: CHANGE_VIEW,
        view: view,
    })
}
