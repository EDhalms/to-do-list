import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Title extends Component {
    render() {
        return (
            <div>
                <h2>To Do List <small>({this.props.testStore.list.length})</small></h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Title);