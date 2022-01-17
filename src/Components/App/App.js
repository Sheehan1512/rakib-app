import React from 'react';
import './App.css';
import LeftColumn from '../LeftColumn/LeftColumn';
import RightColumn from '../RightColumn/RightColumn';

class App extends React.Component {
  render() {
    return (
      <section className="container">
        <LeftColumn />
        <RightColumn />
      </section>
    );
  }
}

export default App;
