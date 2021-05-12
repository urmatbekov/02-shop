import React from 'react';
import {connect} from "react-redux"
import ProductItem from "./ProductItem"

const ProductList = ({products}) => {
    return (
        <div>
            <h1>Hello</h1>
            <div className="row mb-4">
                {products.map((item) => (
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

const msp = ({products}) => {
    return {products}
}

export default connect(msp)(ProductList);