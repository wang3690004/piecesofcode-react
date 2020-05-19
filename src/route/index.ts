import React from 'react'
import {Switch,Route} from 'react-router-dom'
import CodeLib from '../views/codelib/CodeLib'
import Login from '../views/login/Login'


export const routes = [
 {
    path:'/login',
    title:'登录',
    name:'Login',
    component: Login
 }, 
 {
     path:'/codelib',
     title:'代码库',
     name:'CodeLib',
     component: CodeLib
 }
]

// export const getSwitch = ()=>{
//     return
//         {routes.map((route:any,index:any)=>{
//             return <Route path={route.path} ><
//         })
//     }


// }
