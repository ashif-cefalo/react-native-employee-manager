import React, {Component} from "react";
import {ListView, View} from "react-native";
import MemberListItem from './member.list.item';

export default class MemberList extends Component {

    constructor() {
        super();
        this.employees = [
            {'name': 'Himel'},
            {'name': 'Rana'},
            {'name': 'Shuvro'},
            {'name': 'Proshad'}
        ];
    }

    componentWillMount() {
        this.createDataSource();
    }

    createDataSource(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.employees);
    }

    componentDidMount() {
        if (this.props.visible)
            this.props.titleBarApi("", "Employees", "Add");
    }

    renderRow(employee) {
        return <MemberListItem employee={employee}/>;
    }

    render() {
        if (this.props.visible) {
            return (
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            );
        } else {
            return <View/>;
        }
    }
}
