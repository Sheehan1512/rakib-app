import React, { Component } from "react";
import './LeftColumn.css';
import Logo from "../Logo/Logo";
import Expenses from "../Expenses/Expenses";
import Payments from "../Payments/Payments";

class LeftColumn extends React.Component {
    render() {
        return(
            <section className="left-column">
                <Logo />
                <Expenses />
                <Payments />
            </section>
        );
    }
}

export default LeftColumn;