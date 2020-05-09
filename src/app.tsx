import React,{useState, useRef,useEffect} from 'react';
import {List,Avatar, Button,Typography,Form,Input,Select,DatePicker,Menu,Dropdown,Tabs} from "antd";
import { DownOutlined } from "@ant-design/icons";
import {getusers} from './apis/users';
import {connect } from 'react-redux'
import {Dispatch} from 'redux'
import {incrementEnthusiasm,decrementEnthusiasm} from './redux/actions'
import {StoreState} from './redux/types'


import "./app.css";
// import {Link } from 'react-router-dom'
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// import RouteIndex from './route/index'
//ts 关于文件的引入 需要注意的地方是 需要声明类型

const {Title} = Typography
const {Option} = Select
const {TabPane} = Tabs


const mapStateToProps = (state:StoreState):{value:StoreState}=>({value:state})
//将reducer 中的状态插入到组件的props中
const mapDispatchToProps = (dispatch:Dispatch)=>({
  increase:()=>dispatch(incrementEnthusiasm()),
  decrease:()=>dispatch(decrementEnthusiasm()),
})


const todoListData   = [
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "mRcfps",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "pftom",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "Holy",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "crxk",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "Pony",
    time: "2020年3月2日 19:34",
    isCompleted: false
  }
]
const userList = [
  {
    id: "666666666",
    name: "图雀社区",
    avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
  },
  {
    id: "23410977",
    name: "mRcfps",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "25455350",
    name: "crxk",
    avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
  },
  {
    id: "23410977",
    name: "pftom",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "58352313",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
  }
];
const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
); 


// const add1  =  (x:number,y:number):number => {
  
//   return x+y
// }
// const add: (x: number, y: number)=> number =  function(x, y) {
//   return x + y;
// }


const getUsers = async ()=>{
 let result = await getusers({a:'1',b:'2'})
  console.log(result)
}

const TodoInput = ({value = {} })=>{
  return (
    <div className ='todoInput'>
      <Input type='text' placeholder='输入待办事项内容'/>
      <Select style={{width:80}} size='small' defaultValue='666666666' >
      {userList.map(user=>{
        <Option value={user.id}>{user.name}</Option>
      })}
      </Select>
      <DatePicker size='small' style={{marginLeft:'16px',marginRight:'16px'}} />
    </div>
  )
}

function TodoList(){
  return (
    <List className='demo-loadmore-list' itemLayout='horizontal' dataSource={todoListData} 
     renderItem={item=>(
   
      <List.Item actions={[
      <Dropdown overlay={menu}>
        <a key='list-loadmore-more'>{'操作'} <DownOutlined />  </a>
      </Dropdown>]}>

      <List.Item.Meta avatar={ <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"' /> } title={<a href='https://ant.design'>{item.user}</a>} description={item.time} />
      <div>{item.content}</div>
      </List.Item>
 
    )} 
    />
  )
}

function GetUseStates(){
  const [count,setCount] = useState({name:'tom',age:12})
  // useEffect(()=>{
  //   console.log(count.name,count.age)
  //   document.title= count.age.toString()
  //   return ()=>{
  //     console.log(123123123)
  //   }
  // })

  return (<>
    {`${count.name}已经${count.age}岁了`}

    <div onClick={()=>setCount({name:'janny',age:count.age })}>++</div>
    </>)
    
}
export interface Props {
  value:{
    enthusiasmLevel:number
  },
  increase?: () => void;
  decrease?: () => void;
}


function App({value,increase,decrease}:Props){
  
  const callback = ()=> {}
  const onFinish = ()=> {}
  const ref = useRef(null)
  return (
    <div className='App' ref={ref}>
      <div className='container header'>
      {/* {GetUseStates()} */}
      <GetUseStates />
      </div>
      <div className='container header'>
        <img alt='aaa'/>
        <Title  level={3}>汇聚精彩的免费实战教程</Title>
        <p onClick={getUsers}>汇聚精彩的免费实战教程</p>
      </div>
      <div className='container'>
        <Form onFinish={onFinish}>
          <Form.Item name='todo'>
            <TodoInput />
          </Form.Item>
        </Form>
      </div>
      <div className='container'>
        <span onClick={increase}>+</span>
        <h2>ddd</h2>
        <span onClick={decrease}>-</span>
        <p>{value.enthusiasmLevel}</p>
        <Tabs onChange={callback} type='card'>
          <TabPane tab='所有' key='1'> <TodoList /></TabPane>
          <TabPane tab='进行中' key='2'> <TodoList /></TabPane>
          <TabPane tab='已完成' key='3'> <TodoList /></TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default  connect(mapStateToProps,mapDispatchToProps)(App)
