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
    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }

    geolocate(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => this.setState({error: error.message}),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        console.log('MainView', this.props);

        if(this.props.cameraDisplayed){
            return (
                <MobileCamera/>
            );
        } else {
            console.log('Normal')
            return(
                <View>
                    <Text>Data: {this.props.pictureData.data}</Text>
                    <Text>Camera error: {this.props.pictureData.error}</Text>
                    <Button
                        title="Go to camera"
                        onPress={() => this.props.displayCamera(true)}/>
                    <Button
                        title="Start GPS"
                        onPress={() => this.geolocate()}/>
                    <Text>Latitude: {this.state.latitude}</Text>
                    <Text>Longitude: {this.state.longitude}</Text>
                    <Text>GPS error: {this.state.error}</Text>
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