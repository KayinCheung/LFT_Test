import { GET_PRICE } from './types'
import io from 'socket.io-client';

export const getPrice = () => dispatch => {
    //const socket = openSocket('ws://127.0.0.1:5000', {transports: ['websocket']});
    //socket.on("subscribe", data => console.log(data))
    const socket = io('http://127.0.0.1:5000');
    socket.on('update', data => {
        dispatch({
            type: GET_PRICE,
            data: data.data,
        })
    });
    
}
