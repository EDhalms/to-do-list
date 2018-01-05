import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from '../actions/list';

class Form extends Component {
    render() {
        const prop = this.props;
        return (
            <form id="form" onSubmit={(e) => {
                e.preventDefault();
                if (this.inputVal.value.trim() === '') {
                    return;
                }
                prop.add(this.inputVal.value, prop.testStore.list.length);
                this.inputVal.value = '';
                prop.filter();
            }}>
                <input id="input" className="form-control" placeholder="Enter new task..." ref={(input) => {this.inputVal = input}}/>
                <br />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        add: addItem
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);