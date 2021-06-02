import { handleActions } from 'redux-actions';
import { venuesActions } from '../actions/venueActions';

const defaultState = {
    data:{},
    loading: false,
    error: null
};

export const reducer = handleActions({
    [venuesActions.getVenues.request]: (state) => ({...state, loading: true}),
    [venuesActions.getVenues.receive]: (state, {payload}) => ({...state,data:payload, loading: false}),
    [venuesActions.getVenues.error]: (state) => ({...state, error:true, loading: false}),
    [venuesActions.searchVenues.request]: (state) => ({...state, loading: true}),
    [venuesActions.searchVenues.receive]: (state, {payload}) => ({...state,data:payload, loading: false}),
    [venuesActions.searchVenues.error]: (state) => ({...state, error:true, loading: false}),
},defaultState);