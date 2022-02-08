import React from "react";
import './Sheehan.css';
import SheehanPicture from './sheehan.png'

class Sheehan extends React.Component {
    render() {
        return(
            <section className="sheeo">
                <img src={SheehanPicture} id="sheehan" />
                <h3>Sheehan Rahman</h3>
                <p>Needs to pay 540 Taka to Rakib</p>
            </section>
        );
    }
}

export default Sheehan;