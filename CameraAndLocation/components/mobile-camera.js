import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import {displayCamera, savePicture} from '../actions/index';

class MobileCamera extends Component{
    constructor(props){
        super(props);

        this.state = {cameraType: Camera.constants.Type.back};
    }

    render(){
        console.log('Camera');

        return(
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                type={this.state.cameraType}
                aspect={Camera.constants.Aspect.fill}>
                <View style={styles.buttonBar}>
                    <TouchableHighlight style={styles.button} onPress={() => this.switchCamera()}>
                        <Text style={styles.buttonText}>Flip</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={() => this.takePicture()}>
                        <Text style={styles.buttonText}>Take</Text>
                    </TouchableHighlight>
                </View>
            </Camera>
        );
    }

    switchCamera(){
        const newCameraType = (this.state.cameraType === Camera.constants.Type.back) ? Camera.constants.Type.front : Camera.constants.Type.back;
        this.setState({cameraType: newCameraType});
    }

    takePicture() {
        this.refs.cam.capture((error, data) => {
           this.props.savePicture(error, data);
           this.props.displayCamera(false);
        });
    }
}

function mapStateToProps(state) {
    return {
        cameraDisplayed: state.cameraDisplayed
    };
}

export default connect(mapStateToProps, {
    displayCamera: displayCamera,
    savePicture: savePicture
})(MobileCamera);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    buttonBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        right: 0,
        left: 0,
        justifyContent: "center"
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        margin: 5
    },
    buttonText: {
        color: "#777777"
    }
});