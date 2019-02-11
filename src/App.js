import React, { Component } from 'react';
import './App.css';
import VacancyForm from './components/VacancyForm';
import TEST_DATA from './data/Test';
import _ from 'lodash';

class App extends Component {
  // init state
  state = {
    items: TEST_DATA,
  }

  onSubmit = (data) =>{
    let {items} = this.state;
    let newItems = _.clone(items)
    newItems.append(data)
    this.setState({
      items:newItems
    })
    console.log('submit',data)
  }
  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <VacancyForm
            onSubmit={this.onSubmit}
          />
          <div>
            {JSON.stringify(items)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
