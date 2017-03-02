export const DISPLAY_CAMERA = 'DISPLAY_CAMERA';
export const SAVE_PICTURE = 'SAVE_PICTURE';

export function displayCamera(show) {
    return {
        type: DISPLAY_CAMERA,
        payload: show
    };
}

export function savePicture(error, data) {
    return {
        type: SAVE_PICTURE,
        payload: {error: error, data: data}
    };
}