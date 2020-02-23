import React from 'react';
import './app.scss';
import Header from './Header.js'
import Counter from './Counter.js'
import Footer from './Footer.js'

// const Header = () => {
//   return (
//     <header className="counter-App">
//       <h1>React App</h1>
//     </header>
//   )
// }

// const Footer = () => {
//   return (
//     <footer>CopyRight@Qusai-alhanaktah2020</footer>
//   )
// }

// class Counter extends React.Component {
//   constructor(properties) {
//     super(properties)
//     this.counter = 0;
//   }
 
//   handLeIncrementClick = e => {
//     e.preventDefault();
//     let counter = this.counter++;
//     // console.log(counter);
//     this.setState({counter: counter++})
// }
// handLeDecrementClick = e => {
//   e.preventDefault();
//   // let counter = e.target.value;
//   let counter = this.counter--;
//   // console.log(counter);
//   this.setState({counter: counter++})
// }

// render() {
//   return (
//     <section>
//       <h3>{this.counter}</h3>
//       <button onClick={this.handLeIncrementClick}>click for Increment</button>
//       <button onClick={this.handLeDecrementClick}>click for Decrement</button>
//     </section>
//   )
// }
// }

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
