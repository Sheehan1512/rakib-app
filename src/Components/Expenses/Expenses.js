import React from "react";
import ListButton from "../ListButton/ListButton";
import './Expenses.css';
import ListHeading from "../ListHeading/ListHeading";

class Expenses extends React.Component {
    render() {
        return(
            <section className="expenses">
                <ListHeading headingName="Expenses" />
                <section className="listbox">
                    
                    <p>Paratha</p>
                    <p>Laundry</p>
                    <p>Kolija Shingara</p>
                    
                </section>
                <ListButton />
                
            </section>
        )
    }
}

export default Expenses;