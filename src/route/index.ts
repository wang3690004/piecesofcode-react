import CodeLib from '../views/codelib/CodeLib'
import Login from '../views/login/Login'
import CodeLib1 from '../views/codelib/CodeLib1'
import CodeLib2 from '../views/codelib/CodeLib2'

export const routes = [
 {
    path:'/login',
    title:'登录',
    name:'Login',
    component: Login,
    children:[],
 }, 
 {
     path:'/codelib',
     title:'代码库集合',
     name:'CodeLib',
     component: CodeLib,
     children:[{
        path:'/codelib',
        title:'代码库',
        name:'codelib',
        component: CodeLib,
        children:[],
        }, 
        {
            path:'/codelib/codelib1',
            title:'代码库1',
            name:'codelib1',
            component: CodeLib1,
            children:[],
         }, 
         {
            path:'/codelib/codelib2',
            title:'代码库2',
            name:'codelib2',
            component: CodeLib2,
            children:[],
         },  
     ],
 }
]


