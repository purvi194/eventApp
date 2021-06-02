import { all, put, takeLatest, call } from 'redux-saga/effects';
import { venuesActions } from '../actions/venueActions';
import axios from 'axios';

function* getAllVenues(){
    try{
        const response = yield call(axios.get, [`https://app.ticketmaster.com/discovery/v2/venues?apikey=${process.env.REACT_APP_API_KEY}&locale=*`])
        yield put(venuesActions.getVenues.receive(response));
    }
    catch(error) {
        yield put(venuesActions.getVenues.error(error));
    }
} 

function* searchVenue(action){
    try{
        const {pathparams} = action.payload.params;
    const response = yield call(axios.get, [`https://app.ticketmaster.com/discovery/v2/venues?apikey=${process.env.REACT_APP_API_KEY}&keyword=${pathparams.searchString}&locale=*`]);
    yield put (venuesActions.searchVenues.receive(response));
    }
    catch(error) {
        yield put(venuesActions.searchVenues.error(error));
    }
}

export function* venueSaga() {
    yield all([
        yield takeLatest(venuesActions.getVenues.request , getAllVenues),
        yield takeLatest(venuesActions.searchVenues.request , searchVenue),
    ]);
};