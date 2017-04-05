import React, {
	Component
} from "react";
import {
	View,
	Text
} from "react-native";
import {
	MediaQueryStyleSheet
} from "react-native-responsive";
import {
	ListFragment,
	DetailFragment
} from "./components";
import Debug from "./components/debug.js";
import listData from "./data";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowData: {}
		};
	}

	onListClick(rowData) {
		this.setState({
			rowData: rowData
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ListFragment style={styles.list} data={listData} onClick={this.onListClick.bind(this) }/>
				<DetailFragment style={styles.overview} empty={Object.keys(this.state.rowData).length <= 0}>
					<Text style={styles.text}> {this.state.rowData.subtitle} </Text>
					<Text style={styles.text}> {this.state.rowData.title} </Text>
					<Text style={styles.text}> {this.state.rowData.description} </Text>

					<Debug consoleDebug={true}/>
				</DetailFragment>
			</View>
		);
	}
}

const styles = MediaQueryStyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	list: {
		flex: 3
	},
	overview: {
		padding: 10,
		backgroundColor: "lightgrey"
	},
	text: {
		fontWeight: "bold"
	}
}, {
	//Smartphone breakpoint:
	"@media (min-device-width: 320)": {
		container: {
			flexDirection: "column"
		},
		list: {
			flex: 2
		},
		overview: {
			flex: 1
		}
	},
	//Tablet breakpoint:
	"@media (min-device-width: 600)": {
		container: {
			flexDirection: "row"
		},
		list: {
			flex: 1
		},
		overview: {
			flex: 2
		}
	}
});

export default App;