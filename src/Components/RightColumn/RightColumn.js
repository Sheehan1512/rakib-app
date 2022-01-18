import React from "react";
import './RightColumn.css';
import Sheehan from "./Sheehan/Sheehan";
import Rakib from "./Rakib/Rakib";
import KeTakaPabe from "./KeTakaPabe/KeTakaPabe";

class RightColumn extends React.Component {
    render() {
        return(
            <section className="right-column">
                <section className="current-situation">
                    <Sheehan />
                    <KeTakaPabe />
                    <Rakib />

                </section>
                

            </section>
        );
    }
}

export default RightColumn;