import {DISPLAY_CAMERA} from '../actions/index';

export default function (state = false, action) {
    switch (action.type){
        case DISPLAY_CAMERA:
            return action.payload;
    }

    return state;
}