import {createActions} from 'redux-actions';

export const venuesActions = createActions({
    getVenues: {
        REQUEST: [
            (venueParams,options) => {
                const {
                    pathParams, meta, ...restParams
                } = venueParams || {};
                return {
                    options, pathParams: pathParams || {}, params:{...restParams},
                };
            },
            (venueParams) => {
                if(venueParams) {
                    const {meta} = venueParams || {};
                    return meta;
                }
                return {};
            }
        ],
        RECEIVE: [
            data =>({ ...data}),
            (data={}) => {
                return data;
            }
        ],
        ERROR: [
            error => ({error}), 
            (error) => ({
                entity: 'venue',
            }),
        ],
    },
    searchVenues: {
        REQUEST: [
            (venueParams,options) => {
                const {
                    pathParams, meta, ...restParams
                } = venueParams || {};
                return {
                    options, pathParams: pathParams || {}, params:{...restParams},
                };
            },
            (venueParams) => {
                if(venueParams) {
                    const {meta} = venueParams || {};
                    return meta;
                }
                return {};
            }
        ],
        RECEIVE: [
            data =>({ ...data}),
            (data={}) => {
                return data;
            }
        ],
        ERROR: [
            error => ({error}), 
            (error) => ({
                entity: 'venue',
            }),
        ],
    }
})