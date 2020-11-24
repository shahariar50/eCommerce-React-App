import { AxiosResponse } from 'axios';
import { IUserRegister } from '../interfaces/IInterfaces';
import ecommerceAPI from './ecommerceAPI';

/* Users API's*/
export const registerNewUser = (registerUser: IUserRegister) : Promise<any>=> {
    return ecommerceAPI
    .post(`/register`, {...registerUser})
    .then((response: AxiosResponse) => response.data)
    .catch((error: any) =>{
        if(error.response){
         throw error.response;
        }
         throw error;
    });
};


 /*   axios.post('http://localhost:8080/register', registerUser)
    .then((response) => {
        const data = response.data;
        
    }) */
