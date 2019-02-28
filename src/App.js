import React, { Component } from 'react';
import './App.css';
import data from './data/data'

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cta: data.ctas[0]
    }
  }

  nextProperty = () => {

      let homepage = this.state.cta.index === 0;
      let aboutpage = this.state.cta.index === 1;
      let lastButton = this.state.cta.index === (data.ctas.length - 1);

      if (homepage || aboutpage || lastButton) {
        this.setState({
          cta: data.ctas[2]
        })
      } else {
        let newIndex = this.state.cta.index+1;
        this.setState({
          cta: data.ctas[newIndex]
        })
      }
  }

  toggleHome = () => {
    this.setState({
      cta: data.ctas[0]
    })
  }

  toggleAbout = () => {
    this.setState({
      cta: data.ctas[1]
    })
  }

  render() {
    const {cta} = this.state;
    return (
      <div className="strong-ctas" style={{ backgroundColor: cta.bkgColor }}>
        <div className="header">
          <button onClick={() => this.toggleHome()}>Strong CTAS</button>
          <button onClick={() => this.toggleAbout()}>About</button>
        </div>
        
        <div className="titles">
          <h1>{cta.title}</h1>
          <h2>{cta.subheader}</h2>
        </div>

        <div className="cta">
          <button onClick={() => this.nextProperty()}>
              {cta.label}
          </button>
        </div>

      </div>
    );
  }
}

export default App;
