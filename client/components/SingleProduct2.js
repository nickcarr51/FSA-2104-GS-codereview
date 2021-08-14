import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { addOrder } from "../store/order";
import {myCart} from '../store'

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = { singleProduct: null };
    this.addToCart = this.addToCart.bind(this);
    this.singleStyle = {
      display: 'flex',
      padding: '10px',
      justifyContent: 'space-around'
    }
  }

  componentDidMount() {
    console.log("SingleProduct Component Mounted!!");
    const productId = this.props.match.params.productId;
    this.props.fetchSingleProduct(productId);
  }

  async addToCart(_productId) {
    await this.props.myCart(this.props.auth.username)
    this.props.addOrder({cartId: this.props.cart[0].id, productId: _productId});
  }

  render() {
    if (!this.props.singleProduct) return <h4>Loading...</h4>;

    return (
      <div>
        <div style = {this.singleStyle}>
          <img src = {this.props.singleProduct.picture} />
          <ul key={this.props.singleProduct.id}>
            <li>Name: {this.props.singleProduct.name}</li>
            <li>Description: {this.props.singleProduct.description}</li>
            <li>Price: ${this.props.singleProduct.price}</li>
            {/* {this.props.singleProduct.color === "N/A" ? } */}
          </ul>
        </div>
        <button
            type="submit"
            onClick={() =>
              this.addToCart(this.props.singleProduct.id)
            }
          >
            Add to Cart
          </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = { fetchSingleProduct, addOrder, myCart };

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);