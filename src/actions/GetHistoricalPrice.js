import { GET_HISTORICAL, LOADING_HISTORICAL } from './types'


export const getHistorical = () => dispatch => {
    dispatch({
        type: LOADING_HISTORICAL,
    })

    fetch(`http://127.0.0.1:5000/gethistorical`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let allData = JSON.parse(data.historicalData)
            
            let startTime = allData[0]["time"]
            let endTime = allData[allData.length-1]["time"]

            console.log(allData)
      
            dispatch({
                type: GET_HISTORICAL,
                data: allData,
                startTime: startTime,
                endTime: endTime,
            })
        }
    )
}
