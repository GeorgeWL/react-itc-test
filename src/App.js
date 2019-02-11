import React, { Component } from 'react';
import './App.css';
import VacancyForm from './components/VacancyForm';
import TEST_DATA from './data/Test';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <VacancyForm
            
          />
        </main>
      </div>
    );
  }
}

export default App;
