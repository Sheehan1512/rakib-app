import React from "react";
import './AddEntries.css';
import EntriesContainer from "./EntriesContainer/EntriesContainer";


class AddEntries extends React.Component{
    render() {
        return(
            <section id="add-entries">
                <h2>ADD ENTRIES</h2>
                <EntriesContainer />
                <button id="submit">Submit</button>
            </section>
        )
    }
}

export default AddEntries;