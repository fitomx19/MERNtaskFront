import ClienteAxios from './axios';
import clienteAxios from './axios';

const tokenAuth = token => {
    if(token){
        ClienteAxios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete clienteAxios.defaults.headers.common["x-auth-token"]; 
    }
}

export default tokenAuth;