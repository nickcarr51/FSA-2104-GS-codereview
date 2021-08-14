import React, { useState, useEffect } from 'react';
import DetailWindow from './DetailWindow';
import { connect } from 'react-redux';

import FilterButton from './icons/FilterButton';

const ShoppingWindow = (props) => {
  const liquorTypes = ['Brandy', 'Gin', 'Rum', 'Tequila', 'Vodka', 'Whiskey'];
  let count = 0;
  return (
    <div className="">
      <div className="sticky">
        <div className=" flexy justify-between w-10/12 mx-auto">
          <FilterButton
            type={'All'}
            key={'All'}
            history={props.history}
            filter={props.filter}
          />
          {liquorTypes.map((type) => (
            <FilterButton
              type={type}
              key={type}
              history={props.history}
              filter={props.filter}
            />
          ))}
        </div>
        <hr className="wood1"></hr>
      </div>
      <div className="lg:grid lg:grid-cols-6 ">
        {props.products.map((product) => {
          count++;
          return (
            <DetailWindow key={product.id} itemId={product.id} count={count} />
          );
        })}
      </div>
    </div>
  );
};

const mapState = ({ products }, history) => {
  const filter = history.match.params.filter;
  let showProducts = products;

  if (filter) {
    showProducts = showProducts.filter(
      (product) => product.alcohol_type === filter
    );
  }
  return { products: showProducts, filter };
};

export default connect(mapState)(ShoppingWindow);