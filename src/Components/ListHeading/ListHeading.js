import React from "react";
import './ListHeading.css';

class ListHeading extends React.Component {
    render() {
        return(
            <h4 className="list-heading">{this.props.headingName}</h4>
        );
    }
}

export default ListHeading;