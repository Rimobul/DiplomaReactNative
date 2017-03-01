import React, {Component} from 'react';
import {
    Button,
    ListView,
    Text,
    View
} from 'react-native';
import {SampleService} from '../models/realm-connection';
import SampleRecord from '../models/sample-record';

export default class MainView extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.sampleService = new SampleService();
        this.state = {dataSource: dataSource.cloneWithRows([]), samples: []};
    }

    selectAll() {
        const records = this.sampleService.all();
        this.setState({samples: records});
    }

    insertNew() {
        const record = new SampleRecord("Static string",
            Math.random(),
            new Date);
        this.sampleService.insert(record);
    }

    deleteAll() {
        const records = this.sampleService.all();
        this.sampleService.delete(records);
    }

    renderRow(sample) {
        return (
            <Text key={sample.id}>
                Record ID: {sample.id}, title: {sample.title}, value: {sample.value.toString()}, date: {sample.created.toString()}
            </Text>
        );
    }

    render() {
        return (
            <View>
                <Button
                    title="Select all"
                    onPress={() => this.selectAll()}/>
                <Button
                    title="Insert new"
                    onPress={() => this.insertNew()}/>
                <Button
                    title="Delete all"
                    onPress={() => this.deleteAll()}/>

                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.samples)}
                    renderRow={(rowData) => this.renderRow(rowData)}/>
            </View>
        );
    }
}