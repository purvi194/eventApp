import {createActions} from 'redux-actions';

export const favoriteActions = createActions({
    markFavoriteEvent:[
            data =>({ ...data}),
            (data={}) => {
                return data;
            }
        ],
    markNotFavoriteEvent:[
            data =>(data),
            (data='') => {
                return data;
            }
        ],
    markFavoriteVenue:[
            data =>({ ...data}),
            (data={}) => {
                return data;
            }
        ],
    markNotFavoriteVenue:[
            data =>(data),
            (data='') => {
                return data;
            }
        ],
});