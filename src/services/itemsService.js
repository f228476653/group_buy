import {config} from '../config';
export const itemService ={
    getAllItems
}
function getAllItems(sortby){
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' ,
                'Authorization': window.sessionStorage.getItem('token') }
    };
    return fetch(`${config.ServerSettings.apiUrl}/items/all/${sortby}`, requestOptions)
        //為什麼不用.then(res =>handleResponse(res))
        .then(handleResponse)
        .then(items => {
            return items;
        })
}
function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

