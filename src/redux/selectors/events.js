import { createSelector } from 'reselect';
import {get, isEmpty} from 'lodash';

export const getEventsData = state => get(state,'events', {});

export const getEventsList = createSelector([getEventsData], eventsData => {
    const data = get(eventsData, 'data', {});
    const eventData = get(data, 'data', {});
    const events = get(eventData, '_embedded', {});
    const eventList = get(events, 'events', {});
    return isEmpty(eventList)? {} : eventList.slice(0,10);
});