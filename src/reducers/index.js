import { combineReducers } from 'redux'
import priceReducer from './priceReducer';
import freqReducer from './freqReducer';
import historicalReducer from './historicalReducer';
import viewReducer from './viewReducer';
import thresholdReducer from './thresholdReducer';

export default combineReducers({
    price: priceReducer,
    historical: historicalReducer,
    freq: freqReducer,
    view: viewReducer,
    threshold: thresholdReducer
})