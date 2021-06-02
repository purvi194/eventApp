import { handleActions } from 'redux-actions';
import { favoriteActions } from '../actions/favoriteActions';

const defaultState = {
    favEventsList:[],
    favVenuesList:[]
};

export const reducer =handleActions({    
    [favoriteActions.markFavoriteEvent]: (state, {payload}) => ({...state, favEventsList: [...state.favEventsList, payload]}),
    [favoriteActions.markNotFavoriteEvent]: (state,{payload}) => ({...state, favEventsList: state.favEventsList.filter(event=> event.id !== payload)}),
    [favoriteActions.markFavoriteVenue]: (state, {payload}) => ({...state, favVenuesList: [...state.favVenuesList, payload]}),
    [favoriteActions.markNotFavoriteVenue]: (state,{payload}) => ({...state, favVenuesList: state.favVenuesList.filter(venue=> venue.id !== payload)}),
}, defaultState)