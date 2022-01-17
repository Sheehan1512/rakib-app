import React, { Component } from "react";
import './LeftColumn.css';
import Logo from "../Logo/Logo";
import Expenses from "../Expenses/Expenses";

class LeftColumn extends React.Component {
    render() {
        return(
            <section className="left-column">
                <Logo />
                <Expenses />
            </section>
        );
    }
}

export default LeftColumn;