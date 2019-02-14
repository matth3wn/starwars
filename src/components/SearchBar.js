import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      options: null,
    }
  }
  
  handleChange(term) {
    this.setState({
      searchTerm: term
    });
  }

  handleSelct(option){
    this.setState({
      options: option
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.options === ''){
      this.setState({
        option:true,
      })
    }
    else{
      this.props.search(this.state.searchTerm, this.state.options);
    }
    
  }

  render() {
    return (
      <div>
        <form className="searchbar" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="search"
            id="search"
            className='search'
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <select onChange={(e)=>this.handleSelct(e.target.value) }>
           <option value= ''>--Select--</option>
            <option value="planets">planets</option>
            <option value="starships">spaceships</option>
            <option value="vehicles">vehicles</option>
            <option value="people">characters</option>
            <option value="films">films</option>
            <option value="species">species</option>
          </select>
          <button className='submit' type="submit"> Search!</button>
        </form>
        {this.state.options && <p>Please select an option...</p>}
      </div>

    );
  }
}

export default SearchBar;