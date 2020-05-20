import React from 'react'
import {Layout,Menu} from 'antd'
const {SubMenu} = Menu
const {Header,Footer,Sider,Content} = Layout
import {Switch,Route,Link} from 'react-router-dom'
import {routes} from '../../route/index'
import Login from '../login/Login'
import CodeLib from '../codelib/CodeLib'
import CodeLib1 from '../codelib/CodeLib1'
import CodeLib2 from '../codelib/CodeLib2'

interface ROUTES {
    path:string,
    title:string,
    name:string,
    component:any,
    children:any[],
}

interface childrentype{
    path:string,
    title:string,
    name:string,
    component:any,
    children:any[],
}

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
                           {
                               routes.map((item:ROUTES,index:number)=>{
                                   if(item.children.length>0){
                                       return (
                                           <SubMenu key={item.name} title={item.title} >
                                               {item.children.map((itemchild,childindex)=>{
                                                   return (<Menu.Item key={itemchild.name}><Link to={itemchild.path}>{itemchild.title}</Link></Menu.Item> )
                                               })}
                                           </SubMenu>
                                           )
                                   }else{
                                    return (
                                        <Menu.Item key={index}> <Link to={item.path}>{item.title}</Link></Menu.Item>
                                    )
                                   }
                               })
                           }
                       </Menu>
                   </Sider>
                  <Layout style={{padding:'0 24px 24px'}}>
                        <Content className='site-layout-background' style={{padding:24,margin:0,minHeight:280}}>
                            <CodeLib/>
                            <Switch>
                            {/* { 
                                routes.map((route,index)=>{
                                    console.log(route.path)
                                    console.log(route.component)
                                // return <Route path={route.path} key={route.title} component={route.component} >  </Route>
                            })
                            }  */}
                             
                             <Route path="/login"   > <Login bb='444'/>  </Route>
                             <Route path="/codelib" exact> <CodeLib/></Route>  
                             <Route path="/codelib/codelib1" > <CodeLib1 /> </Route>
                             <Route path="/codelib/codelib2" > <CodeLib2 /></Route>          
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

