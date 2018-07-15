import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTableData} from '../actions/index';
import Table from '../component/Table';

class App extends Component{

    componentDidMount(){
        this.props.getTableData();
    }

    render(){
        return(           
             <Table Data={this.props.table.data} />
        )
    }
} 

function mapStateToProps(state){
    return {
         table: state.table
    }
}

function dispatchActionToProps(dispatch){
    return bindActionCreators({
        getTableData:getTableData
    },dispatch)
}

export default connect(mapStateToProps,dispatchActionToProps)(App);