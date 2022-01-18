import React from "react";
import './Rakib.css';
import RakibPicture from './rakib.png'

class Rakib extends React.Component {
    render() {
        return(
            <section className="rakibz">
                <img src={RakibPicture} id="rakib-picture" />
                <h3>Safin Rakib</h3>
                <p>Gets 540 Taka from Sheehan Bhai</p>
            </section>
        );
    }
}

export default Rakib;