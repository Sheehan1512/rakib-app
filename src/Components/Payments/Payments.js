import React from "react";
import ListButton from "../ListButton/ListButton";
import './Payments.css';
import ListHeading from "../ListHeading/ListHeading";

class Payments extends React.Component {
    render() {
        return(
            <section className="transactionList">
                <ListHeading headingName="Payments" />
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

export default Payments;