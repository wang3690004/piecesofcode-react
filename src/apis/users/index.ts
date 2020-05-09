import {axiosMethod} from '../axios'


export const getusers = (data:Object) => axiosMethod.post('/getusers/getusers',data)
