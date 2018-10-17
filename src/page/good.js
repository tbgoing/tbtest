import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../action/good';

const GOODS = [{
    name: 'iPhone 7',
    price: '6,888',
    amount: 37
}, {
    name: 'iPad',
    price: '3,488',
    amount: 82
}, {
    name: 'MacBook Pro',
    price: '11,888',
    amount: 15
}];

class Goods extends Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getGoods());
    }
    render() {
        return this.props.isFetching ?
            (<h1>Loading…</h1>) :
            (
                <ul className="goods">
                    {
                        this.props.goods.map((ele, idx) => (
                            <li key={idx} style={{ marginBottom: 20, listStyle: 'none' }}>
                                <span>{ele.name}</span> |
                            <span>￥ {ele.price}</span> |
                            <span>剩余 {ele.amount} 件</span>
                            </li>
                        ))
                    }
                </ul>
            );
    }
}

const mapStateToProps = (state, ownProps) => ({
    goods: state.goods.data,
    isFetching: state.goods.isFetching
})

// const mapDispatchToProps = dispatch => ({
//     getGoods: () => dispatch(getGoods)
// })

export default connect(mapStateToProps)(Goods);
