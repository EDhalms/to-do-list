import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newFilter} from '../actions/filter';

class Filter extends Component {
    render() {
        const prop = this.props;
        return (
            <div className="btn-group btn-group-justified filter" ref={(aEl) => {this.filterEl = aEl;}}>
                <a href="#all" className="btn btn-primary filterBtn selectFilter" onClick={() => {
                    prop.editFilter(null, this.filterEl.childNodes[0]);
                    prop.filter();
                }}>All ({prop.count[0]})</a>
                <a href="#active" className="btn btn-primary filterBtn" onClick={() => {
                    prop.editFilter(false, this.filterEl.childNodes[1]);
                    prop.filter();
                }}>Active ({prop.count[1]})</a>
                <a href="#completed" className="btn btn-primary filterBtn" onClick={() => {
                    prop.editFilter(true, this.filterEl.childNodes[2]);
                    prop.filter();
                }}>Completed ({prop.count[2]})</a>
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
    return bindActionCreators({
        editFilter: newFilter
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);