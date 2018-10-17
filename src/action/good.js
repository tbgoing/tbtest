import { createAction } from 'redux-actions';
// export const getGoods = createAction('GET_GOODS');
// export const getGoods = goods => {
//     return {
//         type: 'GET_GOODS',
//         payload: goods
//     }
// }

const GOODS = [{
    name: 'iPhone 7',
    price: '6,888',
    amount: 37
}, {
    name: 'iPad',
    price: '3,488',
    amount: 82
}, {
    name: 'MacBook Pro',
    price: '11,888',
    amount: 15
}];

const requestGoods = () => {
    return {
        type: 'REQUEST_GOODS'
    }
}

const receiveGoods = (data) => {
    return {
        type: 'RECEIVE_GOODS',
        payload: data
    }
}

const fetchData = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(GOODS)
        }, 1500);
    })
}

export const getGoods = () => async dispatch => {
    dispatch(requestGoods())
    let goods = await fetchData()
    dispatch(receiveGoods(goods))
}