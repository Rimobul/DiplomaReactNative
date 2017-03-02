import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayCamera} from '../actions/index';
import {
    Button,
    Text,
    View
} from 'react-native';
import MobileCamera from './mobile-camera';

class MainView extends Component {
    render() {
        if(this.props.cameraDisplayed){
            return (
                <MobileCamera/>
            );
        } else {
            return(
                <View>
                    <Text>Data: {this.props.pictureData.data}</Text>
                    <Text>Error: {this.props.pictureData.error}</Text>
                    <Button
                        title="Go to camera"
                        onPress={() => this.props.displayCamera(true)}/>
                    <Button
                        title="Start GPS"
                        onPress={() => {}}/>
                    <Text>GPS data:</Text>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        cameraDisplayed: state.cameraDisplayed,
        pictureData: state.pictureData,
    };
}

export default connect(mapStateToProps, {
    displayCamera: displayCamera
})(MainView);