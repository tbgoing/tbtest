export const goods = (state, action) => {
    switch (action.type) {
        case 'REQUEST_GOODS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_GOODS':
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        default:
            return {
                isFetching: false,
                data: []
            }
    }
}