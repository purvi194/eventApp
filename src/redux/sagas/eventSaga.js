import { all, put, takeLatest, call } from 'redux-saga/effects';
import { eventsAction } from '../actions/eventActions';
import axios from 'axios';

function* getAllEvents(){
    try{
        const response = yield call(axios.get, [`https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&locale=*`])
        yield put(eventsAction.getEvents.receive(response));
    }
    catch(error) {
        yield put(eventsAction.getEvents.error(error));
    }
} 

function* searchEvent(action){
    try{
        const {pathparams} = action.payload.params;
    const response = yield call(axios.get, [`https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&keyword=${pathparams.searchString}&locale=*`]);
    yield put (eventsAction.searchEvents.receive(response));
    }
    catch(error) {
        yield put(eventsAction.searchEvents.error(error));
    }
}

export function* eventSaga() {
    yield all([
        yield takeLatest(eventsAction.getEvents.request , getAllEvents),
        yield takeLatest(eventsAction.searchEvents.request , searchEvent),
    ]);
};