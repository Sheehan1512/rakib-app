import React from "react";
import './Entries.css';
import AddEntries from "./AddEntries/AddEntries";
import ViewEntries from "./ViewEntries/ViewEntries";

class Entries extends React.Component{
    render() {
        return(
            <section id="entries">
                <AddEntries />
                <ViewEntries />
            </section>
        )
    }
}

export default Entries;