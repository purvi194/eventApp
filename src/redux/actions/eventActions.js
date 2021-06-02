import {createActions} from 'redux-actions';

export const eventsAction = createActions({
    getEvents: {
        REQUEST: [
            (eventParams,options) => {
                const {
                    pathParams, meta, ...restParams
                } = eventParams || {};
                return {
                    options, pathParams: pathParams || {}, params:{...restParams},
                };
            },
            (eventParams) => {
                if(eventParams) {
                    const {meta} = eventParams || {};
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
                entity: 'events',
            }),
        ],
    },
    searchEvents: {
        REQUEST: [
            (eventParams,options) => {
                const {
                    pathParams, meta, ...restParams
                } = eventParams || {};
                return {
                    options, pathParams: pathParams || {}, params:{...restParams},
                };
            },
            (eventParams) => {
                if(eventParams) {
                    const {meta} = eventParams || {};
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
                entity: 'events',
            }),
        ],
    }
})