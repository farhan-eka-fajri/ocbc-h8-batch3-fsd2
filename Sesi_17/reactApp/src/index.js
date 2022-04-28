import React from "react";
import ReactDOM  from "react-dom";

const HelloWorld = () => {
    return (
        <h1>Hello React World</h1>

    );
}

const Paragraf = () => {
    return (
        <p>Ini merupakan test paragraf</p>
    );
}

ReactDOM.render(<HelloWorld/>, document.getElementById("root"))
ReactDOM.render(<Paragraf/>, document.getElementById("test"))