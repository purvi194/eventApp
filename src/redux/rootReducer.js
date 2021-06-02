import {combineReducers} from 'redux';

import {reducer as eventReducer} from './reducers/eventReducer';
import {reducer as venueReducer} from './reducers/venueReducer';
import {reducer as favoriteReducer} from './reducers/favoriteReducer';

const rootReducer = combineReducers({
    events:eventReducer, 
    venues: venueReducer,
    favorites: favoriteReducer,
});

export default rootReducer;