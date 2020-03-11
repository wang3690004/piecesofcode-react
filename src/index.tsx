import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from 'react-router-dom'
import App from './app'
// import {Provider} from 'react-redux'
// import store from './redux/store'

// if(module.hot) {
//   module.hot.accept(()=>{
//     ReactDom.render(
//       <Provider >
//       <BrowserRouter><App /></BrowserRouter>
//       </Provider>,
//       document.getElementById('root')
//     )
//   })
// }

ReactDom.render(
    <App complier='TypeScript' framework='React'/>,
  document.getElementById('root')
)