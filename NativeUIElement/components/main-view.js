import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {SimpleCalculator} from 'NativeModules';

export default class MainView extends Component {
    constructor(props){
        super(props);

        this.state = {value: 0}
    }

    render(){
        return(
            <View>
                <AnimatedCircularProgress
                    size={120}
                    width={10}
                    tintColor="#cb3837"
                    fill={this.state.value}/>
                <Text>Value: {this.state.value}</Text>
                <Button
                    title="Generate random number"
                    onPress={() => SimpleCalculator.random(num => this.setState({value: num}))} />
            </View>
        );
    }
}