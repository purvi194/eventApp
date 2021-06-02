import {get} from 'lodash';

export const getFavouritesData = state => get(state,'favorites', {});

// export const getFavVenuesList = createSelector([getFavouritesData], data => {
//     const venueList = get(data, 'favVenuesList', {});
//     return venueList;
// });


// export const getFavEventsList = createSelector([getFavouritesData], data => {
//     const venueList = get(data, 'favVenuesList', {});
//     return venueList;
// });