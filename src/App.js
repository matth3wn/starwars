import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {results:[]}
    }
  }

  handleSearch(term,cat) {
    fetch(`https://swapi.co/api/${cat}/?search=${term}`)
      .then(res => {
        if (!res.ok)
          throw new Error(res.message)
        return res.json()
      })
      .then(data => {
        this.setState({data});
      })
      .catch(err => console.error(err.message))
  }


  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar search={(e,c) => this.handleSearch(e,c)} />
        <Results data={this.state.data} />
      </div>
    );
  }
}

export default App;
