import { handleActions } from 'redux-actions';
import { eventsAction } from '../actions/eventActions';

const defaultState = {
    data:{},
    loading: false,
    error: null
};

export const reducer = handleActions({
    [eventsAction.getEvents.request]: (state) => ({...state, loading: true}),
    [eventsAction.getEvents.receive]: (state, {payload}) => ({...state,data:payload, loading: false}),
    [eventsAction.getEvents.error]: (state) => ({...state, error:true, loading: false}),
    [eventsAction.searchEvents.request]: (state) => ({...state, loading: true}),
    [eventsAction.searchEvents.receive]: (state, {payload}) => ({...state,data:payload, loading: false}),
    [eventsAction.searchEvents.error]: (state) => ({...state, error:true, loading: false}),
},defaultState);