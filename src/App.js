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
          <h1>
            Vacancies
          </h1>
          To get a feel for what it's like to work at ITC
        </header>
        <main>
          <VacancyForm
            onSubmit={this.onSubmit}
          />
          <VacancyList 
            items={items}
          />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
