import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DONE_ITEM, REMOVE_ITEM} from '../constants/constants';
import {bindActionCreators} from 'redux';
import {editList} from '../actions/list';

class List extends Component {
    render() {
        const prop = this.props;
        var todoList;
        if (!prop.arr.length) {
            todoList = <p className="text-center someText">No Tasks!</p>;
        }
        else {
            todoList = prop.arr.map((el, ind, array) => {
                return (
                    <li className={array[ind].status === false ? 'list-group-item listStyle done' : 'list-group-item listStyle'} key={ind}>
                        <span className="glyphicon glyphicon-ok okBut" aria-hidden="true" onClick={() => {
                            prop.done(DONE_ITEM, el.key);
                            prop.filter();
                        }}></span>
                        <p className="text">{el.text}</p>
                        <span className="glyphicon glyphicon-remove removeBut" aria-hidden="true" onClick={() => {
                            prop.removeEl(REMOVE_ITEM, el.key);
                            prop.filter();
                        }}></span>
                    </li>
                );
            });
        }
        return (<ul className="list-group todoList">{todoList}</ul>);
    }
}

function mapStateToProps(state) {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeEl: editList,
        done: editList
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);