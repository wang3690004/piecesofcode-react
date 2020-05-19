import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer'
const store = createStore<any,any,any,any>(reducer)


if(module.hot) {
  module.hot.accept(()=>{
    console.log('getmodulehot')
    ReactDom.render(
      <Provider store= {store} >
        <BrowserRouter> 
          <App  />,
         </BrowserRouter> 
          </Provider>,
      document.getElementById('root')
    )
  })
}
const render = ()=>{
  ReactDom.render(
    <Provider store={store} >
      <BrowserRouter>
         <App  />,
         </BrowserRouter>
          </Provider>,
  document.getElementById('root')
)
}

render()