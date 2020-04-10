import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from 'react-router-dom'
import App from './App'


import {Provider} from 'react-redux'
// import store from './redux/store'

if(module.hot) {
  module.hot.accept(()=>{
    console.log('getmodulehot')
    ReactDom.render(
      // <Provider >
      /* // <BrowserRouter> */
      <App  />,
      /* // </BrowserRouter> */
      //  </Provider>,
      document.getElementById('root')
    )
  })
}
const render = ()=>{
  ReactDom.render(
    <App  />,
  document.getElementById('root')
)
}

render()