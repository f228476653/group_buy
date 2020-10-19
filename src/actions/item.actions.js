import { itemConstants } from '../constants/item.constants';
import { itemService } from '../services/itemsService'
import { alertActions } from './alert.actions'

function getAllItems(sortBy) {
    return dispatch=> {
        dispatch(request(sortBy));
        itemService.getAllItems(sortBy)
            .then(
                data => {
                    dispatch(success(data));
            },
            //error怎樣？
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            
            );
    };
    function request(sortBy) { return { type: itemConstants.ITEM_ALL_REQUEST, sortBy } }
    function success(data) { return { type: itemConstants.ITEM_ALL_SUCCESS, data } }
    function failure(data) { return { type: itemConstants.ITEM_ALL_FAILURE, data } }
}


export const itemActions = {
    getAllItems
}