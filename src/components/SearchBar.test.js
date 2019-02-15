import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchBar from './SearchBar'

describe(`SearchBar Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar search={(e, c) => this.handleSearch(e, c)} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders searchbar', () => {
    const wrapper = shallow(<SearchBar  />)
    wrapper.find('button').at(0).simulate('submit')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
