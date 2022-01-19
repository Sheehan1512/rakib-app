import React from "react";
import AddExpenses from "./AddExpenses/AddExpenses";
import AddPayments from "./AddPayments/AddPayments";
import './EntriesContainer.css';

class EntriesContainer extends React.Component {
    render() {
        return(
            <section id="entries-container">
                <AddExpenses />
                <AddPayments />
            </section>
        );
    }
}

export default EntriesContainer;