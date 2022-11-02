import React, { Component } from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
    render() {
        let {
            Object
        } = this.props
        return (
            <div style={{ padding: "0px" }}>
                {JSON.stringify(Object)}
            </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    Object: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;