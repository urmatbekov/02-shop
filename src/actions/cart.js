
const addToCart = (product) => {
    return {
        type:"ADD_TO_CART_PRODUCT",
        product
    }
}

const plussToCart = (product) => {
    return {
        type:"PLUSS_TO_CART_PRODUCT",
        product
    }
}
const minusToCart = (product) => {
    return {
        type:"MINUS_TO_CART_PRODUCT",
        product
    }
}
const deleteToCart = (product) => {
    return {
        type:"DELETE_TO_CART_PRODUCT",
        product
    }
}

export {addToCart,plussToCart,minusToCart,deleteToCart}