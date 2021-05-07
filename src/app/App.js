import React from 'react';
import { connect } from "react-redux";

const App = ({ state }) => {
    // console.log(state)
    return (
        <div>
            <div className="container border shadow-sm mt-4">
                
            </div>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(App);