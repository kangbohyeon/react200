import React, { Component } from "react";

class R110_ApiGetJson extends Component {
    componentDidMount = async () => {
        const response = await fetch('/users');
        const body = await response;
        console.log(body);
        console.log("body.message : " + body.message)
    }

    render() {
        return (
            <><h1>Call Node Api get</h1></>
        )
    }
}

export default R110_ApiGetJson;