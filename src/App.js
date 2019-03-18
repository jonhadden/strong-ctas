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
      let aboutPage = this.state.page.index === 1;
      let colors = data.colors;
      let labels = data.labels;

      if (homePage) {
        this.setState({
          page: data.pages[1],
          fontSize: '42px',
          randomColor: colors[Math.floor(Math.random()*colors.length)]
        })
      } else if (aboutPage) {
        this.setState({
          page: false,
          label: labels[Math.floor(Math.random()*labels.length)],
          randomColor: colors[Math.floor(Math.random()*colors.length)]
        })
      } else {
        this.setState({
          page: false,
          label: labels[Math.floor(Math.random()*labels.length)],
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

  toggleAbout = () => {
    let colors = data.colors;
    this.setState({
      page: data.pages[1],
      randomColor: colors[Math.floor(Math.random()*colors.length)]
    })
  }

  render() {
    if (this.state.page) {
      return (
        <div className={"strong-ctas " + (this.state.page.subheader ? 'about' : 'home')} style={{ backgroundColor: this.state.randomColor }}>
          <div className="header">
            <button onClick={() => this.toggleHome()}>Strong CTAS</button>
            <button onClick={() => this.toggleAbout()}>About</button>
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
            <button onClick={() => this.toggleAbout()}>About</button>
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
