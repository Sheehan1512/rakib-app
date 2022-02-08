import React from "react";
import './LeftColumn.css';
import Logo from "../Logo/Logo";
import Expenses from "../Expenses/Expenses";
import Payments from "../Payments/Payments";

function LeftColumn({handleOpen}) {
    return(
        <section className="left-column">
            <Logo handleOpen={handleOpen} />
            <Expenses />
            <Payments />
        </section>
    );
}

export default LeftColumn;