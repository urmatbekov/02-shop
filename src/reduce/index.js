import {combineReducers} from "redux"
import products from "./products"
import cart from "./cart"

const reduce = combineReducers({
    products,
    cart
})



export default reduce;