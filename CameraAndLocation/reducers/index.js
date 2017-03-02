import { combineReducers } from 'redux';
import CameraDisplayedReducer from './camera-displayed-reducer';
import PictureDataReducer from './picture-data-reducer';

const rootReducer = combineReducers({
    cameraDisplayed: CameraDisplayedReducer,
    pictureData: PictureDataReducer,
});

export default rootReducer;