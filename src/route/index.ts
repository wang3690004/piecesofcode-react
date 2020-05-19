import CodeLib from '../views/codelib/CodeLib'
import Login from '../views/login/Login'

interface ROUTES {
    path:string,
    title:string,
    name:string,
    component:any,
    children?:object[],
}


export const routes:ROUTES = [
 {
    path:'/login',
    title:'登录',
    name:'Login',
    component: Login,
    children:[],
 }, 
 {
     path:'/codelib',
     title:'代码库',
     name:'CodeLib',
     component: CodeLib,
     children:[],
 }
]


