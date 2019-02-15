import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchBar from './SearchBar'

describe(`SearchBar Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar  />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders searchbar', () => {
    const wrapper = shallow(<SearchBar  />)
    wrapper.find('button').at(0).simulate('submit',)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('expect submit to be called', () => {
    const preventDefault = jest.fn()
    const wrapper = shallow(<SearchBar />)
    wrapper.find('form').simulate('submit',{preventDefault})
    expect(preventDefault).toBeCalled()
  })

  it('expect change to be called', () => {
    const wrapper = shallow(<SearchBar />);
    wrapper.find('select').simulate('change',{target:{ value: 'tacos'}})
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
