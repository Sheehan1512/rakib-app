import React from "react";
import './Logo.css'

function Logo({handleOpen}) {
    return(
        <section className="logo" onClick={handleOpen}>
            <h1>EXPENSE</h1>
            <h1>TRACKER</h1>
        </section>
    );
}

export default Logo;