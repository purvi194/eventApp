import { createSelector } from 'reselect';
import {get, isEmpty} from 'lodash';

export const getVenuesData = state => get(state,'venues', {});

export const getVenuesList = createSelector([getVenuesData], venuesData => {
    const data = get(venuesData, 'data', {});
    const venueData = get(data, 'data', {});
    const venues = get(venueData, '_embedded', {});
    const venueList = get(venues, 'venues', {});
    return isEmpty(venueList)? {} : venueList.slice(0,10);
});