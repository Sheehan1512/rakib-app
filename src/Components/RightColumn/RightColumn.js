import React from "react";
import './RightColumn.css';
import CurrentSitutation from "./CurrentSituation/CurrentSituation";
import Entries from "./Entries/Entries";


class RightColumn extends React.Component {
    render() {
        return(
            <section className="right-column">
                
                <CurrentSitutation />
                <Entries />


            </section>
        );
    }
}

export default RightColumn;