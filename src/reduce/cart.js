const initialState = {
    itemCart: [],
    totalPrice: 0,
}

const cart = (state = initialState, action) => {
    if (action.type === "ADD_TO_CART_PRODUCT") {
        const product = action.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)
        let itemCart = []
        if (index === -1) {
            const item = {
                count: 1,
                product,
                lineTotalPrice: product.price
            }
            itemCart = [...state.itemCart, item]
        } else {
            itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }
            item.count += 1
            item.lineTotalPrice = item.product.price * item.count
            itemCart[index] = item
        }
        return {
            itemCart,
            totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
        }
    }
    if (action.type === "PLUSS_TO_CART_PRODUCT") {
        const product = action.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)
        if (index !== -1) {
            const itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }
            item.count += 1
            item.lineTotalPrice = item.product.price * item.count
            itemCart[index] = item
            return {
                itemCart,
                totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
            }
        }
    }
    if (action.type === "MINUS_TO_CART_PRODUCT") {
        const product = action.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)
        if (index !== -1) {
            const itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }
            item.count -= 1
            item.lineTotalPrice = item.product.price * item.count
            itemCart[index] = item
            return {
                itemCart,
                totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
            }
        }
    }
    if (action.type === "DELETE_TO_CART_PRODUCT") {
        const product = action.product
        const itemCart = state.itemCart.filter((item) => item.product.id !== product.id)

        return {
            itemCart,
            totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
        }

    }


    return state
}

export default cart;