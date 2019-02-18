import React, { Component } from 'react';
import './App.sass';
import TEST_DATA from './data/Test';
import VacancyForm from './components/VacancyForm';
import VacancyList from './components/VacancyList';

class App extends Component {
  // init state
  state = {
    items: TEST_DATA,
  }
  // I imagine in a real app would handle this with an
  // external data store such as mysql or graphQL, 
  // probably with redux or similar to control the data
  // but cause this is a quick app I'm just using local state

  onSubmit = (data) => {
    let { items } = this.state;
    items.push(data)
    this.setState({ items })
    console.log('submit', data)
  }
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="logo"><a href="/">ITC</a></h1>
          <ul className="main-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/">Who We Are</a></li>
            <li><a href="/">What We Do</a></li>
            <li className={'active'}><a href="/">Vacancies</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </header>
        <main>
          <div
            className={'header'}
          >
            <h1
              className={'title'}
            >
              Vacancies
            </h1>
            To get a feel what it's like to work or ITC, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <VacancyForm
            onSubmit={this.onSubmit}
          />
          <VacancyList
            items={items}
          />
        </main>
        <footer className='App-footer'>
          <h1 className="logo"><a href="/">ITC</a></h1>
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/">Who We Are</a></li>
            <li><a href="/">What We Do</a></li>
            <li><a href="/">Vacancies</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
