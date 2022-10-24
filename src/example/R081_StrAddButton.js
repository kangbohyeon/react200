import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../actions";

class R081_StrAddButton extends Component {
    render() {
        return (
            // <input value='Add200' type='button' onClick={this.addString}/>
            <input value='Add200' type='button' onClick={this.addString} />
        )
    }

    // addString = () =>{
    //     this.props.store.dispatch(add());
    // }
}

let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    };
};

R081_StrAddButton = connect(null, mapDispatchToProps)(R081_StrAddButton);

export default R081_StrAddButton;