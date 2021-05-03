import React from 'react';
import {connect} from "react-redux";

const App = ({state}) => {
    console.log(state)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

const msp = (state) => {
    return {state}
}

export default connect(msp)(App);