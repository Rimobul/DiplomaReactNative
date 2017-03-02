import {SAVE_PICTURE} from '../actions/index';

export default function (state = {}, action) {
    switch (action.type){
        case SAVE_PICTURE:
            return action.payload;
    }

    return state;
}