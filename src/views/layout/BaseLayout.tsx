import React from 'react'
import {Layout,Menu} from 'antd'
const {SubMenu} = Menu
const {Header,Footer,Sider,Content} = Layout
import {Switch,Route,Link} from 'react-router-dom'
import {routes} from '../../route/index'
import Login from '../login/Login'
import CodeLib from '../codelib/CodeLib'

class BaseLayout extends React.Component{
   constructor(props:any){
       super(props)
       this.state= {}
   }
   render(){
       return (
           <Layout style={{minHeight:'-webkit-fill-available'}}>
               <Header className="header"></Header>
               <Layout >
                   <Sider width={250}  className="site-layout-background">
                       <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height:'100%',borderRight:0}}>
                           <SubMenu key='sub1' title='subnav 1'  >
                               <Menu.Item key='1'>option1</Menu.Item>
                               <Menu.Item key='2'><Link to='/login' >login</Link></Menu.Item>
                               <Menu.Item key='3'  ><Link to='/codelib' >codelib</Link></Menu.Item>
                               <Menu.Item key='4'>option4</Menu.Item>
                           </SubMenu>
                           <SubMenu key='sub2' title='subnav 2'  >
                               <Menu.Item key='5'>option5</Menu.Item>
                               <Menu.Item key='6'>option6</Menu.Item>
                               <Menu.Item key='7'>option7</Menu.Item>
                               <Menu.Item key='8'>option8</Menu.Item>
                           </SubMenu>
                           <SubMenu key='sub3' title='subnav 3'  >
                               <Menu.Item key='9'>option9</Menu.Item>
                               <Menu.Item key='10'>option10</Menu.Item>
                               <Menu.Item key='11'>option11</Menu.Item>
                               <Menu.Item key='12'>option12</Menu.Item>
                           </SubMenu>
                       </Menu>
                   </Sider>
                  <Layout style={{padding:'0 24px 24px'}}>
                        <Content className='site-layout-background' style={{padding:24,margin:0,minHeight:280}}>
                            <Switch>
                            {
                                routes.map((route,index)=>{
                                    console.log(route.path)
                                    console.log(route.component)
                                return <Route path={route.path} key={route.title} component={Login} >  </Route>
                            })
                            }
                             
                             {/* <Route path={'/login'}>{<Login/> } </Route>
                             <Route path={'/codelib'}><CodeLib/>  </Route>  */}
                            
                            </Switch>
                        </Content>
                        <Footer style={{textAlign:'center'}}>createdby antd</Footer>
                  </Layout> 
               </Layout>
           </Layout>
       )
   }
}

export default BaseLayout

