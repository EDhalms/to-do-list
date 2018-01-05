import React from 'react';

import {store} from '../store/store';

/*components*/
import Title from './Title';
import Form from './Form';
import List from './List';
import Filter from './Filter';
/*components*/

store.subscribe(() => {
    // console.log(store.getState());
});

export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            size: [0, 0, 0]
        };
    }
    
    filter() {
        const constState = store.getState();
        const status = constState.filter.status;
        let newStatus = status;
        console.log(constState.filter.id)
        if (constState.filter.id !== null) {
            for (let i = 0; i < constState.filter.id.parentNode.childNodes.length; i++) {
                constState.filter.id.parentNode.childNodes[i].classList.remove('selectFilter');
            }
            constState.filter.id.classList.add('selectFilter');
        }
        if (status === null) {
            newStatus = true;
        }
        var newArr = constState.list.filter((el, ind, array) => {
            if (el.status !== newStatus) {
                return el;
            }
        });
        var size = [];
        size.push(constState.list.length);
        if (newStatus) {
            size.push(constState.list.length - newArr.length, newArr.length);
        }
        else {
            size.push(newArr.length, constState.list.length - newArr.length);
        }
        if (status === null) {
            newArr = [...constState.list];
        }
        newStatus = status;
        this.setState({
            size: size,
            list: newArr
        });
    }
    
    render() {
        return (
            <div>
                <Title />
                <Form filter={this.filter.bind(this)} />
                <List arr={this.state.list} filter={this.filter.bind(this)} />
                <Filter filter={this.filter.bind(this)} count={this.state.size} />
            </div>
        );
    }
}