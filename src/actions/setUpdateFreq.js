import { SET_UPDATE_FREQ } from './types'


export const setUpdateFreq = (freq) => dispatch => {

    const data = { "update_frequency": freq };

    fetch(`http://127.0.0.1:5000/updatefreq`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: SET_UPDATE_FREQ,
                freq: freq,
            })


        }
        )


}
