import React from "react";
import './ViewEntries.css';
import ListHeading from '../../../ListHeading/ListHeading';
import ListButton from '../../../ListButton/ListButton';


class ViewEntries extends React.Component{
    render() {
        return(
            <section className="expenses">
                <ListHeading headingName="Transaction Entries" />
                <section className="listbox">
                    
                    <p>Paratha</p>
                    <p>Laundry</p>
                    <p>Kolija Shingara</p>
                    <p>Paratha</p>
                    <p>Laundry</p>
                    <p>Kolija Shingara</p>
                    
                </section>
                <ListButton />
                
            </section>
        )
    }
}

export default ViewEntries;