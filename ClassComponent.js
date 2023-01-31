import React from "react";

class ClassComponent extends React.Component {
    render() {
        return (
            <>
                <h2>I am the Class Component</h2>;
                <p>My Name is {this.props.name}</p>
            </>

        );
    }
}


export default ClassComponent;