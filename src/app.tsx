import React from 'react';

// import { Layout, Menu,Breadcrumb,Message} from 'antd'
// import {Link } from 'react-router-dom'
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// import {getUser} from './apis/user'
// import RouteIndex from './route/index'


interface props {
  // testa: string,
}

interface state {
  bbb:any,
  testa:object,
  testc?:string,
  readonly testd:string
}

interface Todo {
   user:string,
   [propName: string]:any
}


class App extends React.Component<props,state> {
  constructor(props:props ){
    super(props)
    this.state = {
      bbb:'dddddddddasdasdasddddd',
      testa:[1,2,'3',[2,'44']],
      testd:'23123',
    }
  }




   test(){
     let todo: Todo = {
       user:'3333'
     }
     todo.user = '444444'
     todo.time = '3333'
     todo.name = '3123'
     console.log(todo)
    let slogan :string[] = ['1,2,3']
    // this.setState({testd:'999999'})
    return (<span>{slogan}</span>)
  }
  testb(){
    let slogan = 'hello world'
    return (<span>{slogan}</span>)
  }

  render(): any{
    return (
      <div>{this.state.testa}
      {this.test()}
      {this.testb()}
      </div>
    )
  }

}

export default  App
