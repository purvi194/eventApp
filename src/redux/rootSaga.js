import {all } from 'redux-saga/effects';
import {eventSaga} from './sagas/eventSaga';
import {venueSaga} from './sagas/venueSaga';

export default function* rootSaga() {
    yield all([
        eventSaga(),
        venueSaga(),
    ]);
}