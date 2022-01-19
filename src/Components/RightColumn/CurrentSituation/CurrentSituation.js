import React from "react";
import './CurrentSituation.css';
import Sheehan from "./Sheehan/Sheehan";
import KeTakaPabe from "./KeTakaPabe/KeTakaPabe";
import Rakib from "./Rakib/Rakib";

class CurrentSitutation extends React.Component {
    render() {
        return(
            <section className="current-situation">
                <Sheehan />
                <KeTakaPabe />
                <Rakib />

            </section>
        );
    }
}

export default CurrentSitutation;