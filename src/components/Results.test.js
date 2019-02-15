import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';


describe('results component', ()=>{
  it('renders without crashing', () => {
    const obj ={
      results:[1,2,4,5]
    }
    const div = document.createElement('div');
    ReactDOM.render(<Results data= {obj}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  
  });
})
