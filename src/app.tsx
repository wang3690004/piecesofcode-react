import React from 'react';
// import { Layout, Menu,Breadcrumb,Message} from 'antd'
// import {Link } from 'react-router-dom'
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// import {getUser} from './apis/user'
// import RouteIndex from './route/index'


interface props {
  testa: string,
}

interface state {
  bbb:any
}


class App extends React.Component<props,state> {
  constructor(props:props ){
    super(props)
    this.state = {
      bbb:'dddd'
    }
  }

  render(): any{
    return (
      <div>{this.state.bbb}</div>
    )
  }

}

export default  App
