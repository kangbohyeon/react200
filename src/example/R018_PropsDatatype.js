import React, { Component } from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render() {
        let {
            String, Number, Boolean, Array, Object, Function
        } = this.props
        return (
            <div style={{ padding: "0Px" }}>
                <p>StringProps:{String}</p>
                <p>NumberProps:{Number}</p>
                <span>BolleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps:{JSON.stringify(Object)}</p>
                <p>FunctionProps:{Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    Object: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;