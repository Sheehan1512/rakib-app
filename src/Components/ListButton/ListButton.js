import React from "react";
import './ListButton.css';

class ListButton extends React.Component {
    render() {
        return(
            <button className="see-all"><i className="fas fa-eye"></i>  See All</button>
        )
    }    
}

export default ListButton;