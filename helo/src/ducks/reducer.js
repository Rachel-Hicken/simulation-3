const initial_state = {
    username: '',
    id: '',
    img: ''
}


const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_ID = 'UPDATE_ID';
const UPDATE_IMG = 'UPDATE_IMG';

export function update_username(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function update_id(id) {
    return {
        type: UPDATE_ID,
        payload: id
    }
}

export function update_img(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
        return Object.assign({}, state, {username: action.payload});
        case UPDATE_ID:
        return Object.assign({}, state, {id: action.payload});
        case UPDATE_IMG:
        return Object.assign({}, state, {img: action.payload});
        default:
            return state;
    }
}