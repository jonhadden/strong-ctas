import React, { Component } from 'react';
import './App.css';
import data from './data/data'

class App extends Component {

  constructor(props){
    super(props);
    let colors = data.colors;

    this.state = {
      page: data.pages[0],
      randomColor: colors[Math.floor(Math.random()*colors.length)]
    }
  }

  nextProperty = () => {

      let homePage = this.state.page.index === 0;
      let colors = data.colors;
      let labels = data.labels;
      let currentLabel = this.state.label;
      let newIndex = labels.indexOf(currentLabel) + 1;
      let lastButton = labels.indexOf(currentLabel) === (labels.length - 1);

      if (homePage || lastButton) {
        this.setState({
          page: false,
          label: labels[0],
          randomColor: colors[Math.floor(Math.random()*colors.length)]
        })
      } else {
        this.setState({
          page: false,
          label: labels[newIndex],
          randomColor: colors[Math.floor(Math.random()*colors.length)]
        })
      }
  }

  toggleHome = () => {
    let colors = data.colors;
    this.setState({
      page: data.pages[0],
      randomColor: colors[Math.floor(Math.random()*colors.length)]
    })
  }

  render() {
    if (this.state.page) {
      return (
        <div className={"strong-ctas " + (this.state.page.subheader ? 'about' : 'home')} style={{ backgroundColor: this.state.randomColor }}>
          <div className="header">
            <button onClick={() => this.toggleHome()}>Strong CTAS</button>
          </div>
          
          <div className="titles">
            <h1>{this.state.page.title}</h1>
            <h2>{this.state.page.subheader}</h2>
          </div>

          <div className="cta">
            <button onClick={() => this.nextProperty()} style={{ color: this.state.randomColor }}>
                {this.state.page.label}
            </button>
          </div>

        </div>
      );  
    } else {
      return (
        <div className="strong-ctas" style={{ backgroundColor: this.state.randomColor }}>
          <div className="header">
            <button onClick={() => this.toggleHome()}>Strong CTAS</button>
          </div>
          
          <div className="cta interior">
            <button onClick={() => this.nextProperty()} style={{ color: this.state.randomColor }}>
                {this.state.label}
            </button>
          </div>

        </div>
      );
    }
  }
}

export default App;
