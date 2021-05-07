import React from 'react';

const ProductList = () => {
    return (
        <div>
            <h1>Hello</h1>
            <div className="row mb-4">
                {state.map((item) => (
                    <div key={item.id} className="col-3 mt-4">
                        <div className="card card-product">
                            <img className="card-img-top card-product-img" src={item.image} alt="" />
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.title}
                                </h2>
                                <p className="card-text">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;