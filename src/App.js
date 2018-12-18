import React, { Component } from 'react';
import './App.css';
import Header   from './components/Header'
import Skills   from './components/Skills'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'


class App extends Component {
  constructor(props){
    super(props)

    this.state={
      skills: [
        'React',
        'Redux',
        'HTML',
        'CSS ',
        'JavaScript',
        'Bootstrap',
        'Web Audio API',
        'Testing(Jest)',
        'D3',
        'Vue',
        'GraphQL',
        'Express',
        'jQuery',
        'mySQL',
        'Python',
        'React Native'
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills skills={this.state.skills}/>
        <Projects />
        <Footer />
      </div>
    );
  }
}



export default App;
