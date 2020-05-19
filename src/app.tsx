import React from 'react';
import BaseLayout from './views/layout/BaseLayout'
import './App.css'
// import {getusers} from './apis/users';
// import {connect } from 'react-redux'
// import {Dispatch} from 'redux'
// import {incrementEnthusiasm,decrementEnthusiasm} from './redux/actions'
// import {StoreState} from './redux/types'


// const mapStateToProps = (state:StoreState):{value:StoreState}=>({value:state})
// //将reducer 中的状态插入到组件的props中
// const mapDispatchToProps = (dispatch:Dispatch)=>({
//   increase:()=>dispatch(incrementEnthusiasm()),
//   decrease:()=>dispatch(decrementEnthusiasm()),
// })

class App extends React.Component{
  constructor(props:any){
    super(props)
    this.state = {}
  }
  render(){
    return <BaseLayout />
  }
}





// export interface Props {
//   value:{
//     enthusiasmLevel:number
//   },
//   increase?: () => void;
//   decrease?: () => void;
// }



export default App
// export default  connect(mapStateToProps,mapDispatchToProps)(App)
