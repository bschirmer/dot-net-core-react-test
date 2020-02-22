import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CartItem from './CartItem';

export class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartCount: 0,
            cartItems: [],
            isCartDrawOpen: false
        }

        this.getCartCount = this.getCartCount.bind(this);
        this.openCartDraw = this.openCartDraw.bind(this);
        this.closeCartDraw = this.closeCartDraw.bind(this);
    }

    getCartCount() {
        fetch('https://localhost:5001/cart/count')
            .then(results => {
                return results.json()
            })
            .then(data => {
                console.log("cartcount ",data);
                this.setState({ cartCount: data }, () => console.log(data));
            })
            .catch((e) => console.log(e));
        this.props.resetCartCountUpdate();
    }

    getCartItems() {
        // This fetch gets all cart items but not cheese,
        // this would be one call in a real app
        // This didnt feel right when i wrote it
        fetch('https://localhost:5001/cart/all')
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({ cartItems: data }, () => console.log(this.state.cartItems));
        })
        .catch((e) => console.log(e));
    }

    componentDidMount() {
        this.getCartCount();
    }

    componentDidUpdate() {
        if (this.props.updateCartCount) {
            this.getCartCount();
        }
    }   
    
    openCartDraw(){
        this.setState({isCartDrawOpen: true});
        this.getCartItems();
    }
    
    closeCartDraw(){
        this.setState({isCartDrawOpen: false});
    }

    render() {
        
        let cartList;
        if(this.state.cartItems.length > 0){
            cartList = this.state.cartItems.map((cartItem) => {
                return <CartItem cartItem={cartItem}/>
            })
        } else {
            cartList = <div>Your cart is empty</div>
        }

        return (
            <div>
                <Button onClick={(e) => this.openCartDraw(e)}>Cart ({this.state.cartCount})</Button>
                <Drawer anchor="right" open={this.state.isCartDrawOpen} onClose={(e) => this.closeCartDraw(e)}>
                    <List>
                        {cartList}
                    </List>
                </Drawer>
            </div>
        );
    }
}