import React from "react";
import './Expenses.css';

class Expenses extends React.Component {
    render() {
        return(
            <section className="expenses">
                <h4>Expenses</h4>
                <section className="listbox">
                    
                    <p>Paratha</p>
                    <p>Laundry</p>
                    <p>Kolija Shingara</p>
                    
                </section>
                <button className="see-all">See All</button>
            </section>
        )
    }
}

export default Expenses;