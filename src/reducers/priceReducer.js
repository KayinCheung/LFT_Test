import { GET_PRICE } from '../actions/types'

const initialState = {
    data: [],
    page: 0,
    currentPageData: []
}

export default function (state = initialState, action) {
    let newData
    switch (action.type) {

        case GET_PRICE:
            newData = (action.data).concat(state.data)
            if (newData.length > 500) newData.length = 500
           // console.log(newData)

            return {
                ...state,
                data: newData,
            }


        default:
            return state;
    }
}