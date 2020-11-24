import * as userAPI from '../apis/usersApi';
import {IReduceAction, IUserRegister} from '../interfaces/IInterfaces';
import {StateChangeTypes} from '../store/action.types';
import {initialState} from '../store/reducer';


/* export const registerUser = async( //parameters):Promise<any> => {
    //FunctionBody
    //Additional state types change eg loading true, errormessage set
    //.then(we can give any name as we like for response with any type)
    .then(()=>{}) it has an arrow function
    //API Call 
    //catch is also an arrow function with takes ex as an parameter to catch the error
} */

export const registerUserService = async(
    registerUser: IUserRegister,
    setContextState: (action: IReduceAction) => void
): Promise<any> =>{
    setContextState({ type: StateChangeTypes.FETCHING, payload: true});
    setContextState({ type: StateChangeTypes.SET_ERROR_MESSAGE, payload: ''});

    await userAPI
    .registerNewUser(registerUser) // this is the function called from usersAPI post route
    .then((registerUserResponse: any) =>{
        setContextState({ type: StateChangeTypes.FETCHING, payload: false});
        if(registerUserResponse){
        setContextState( {type: StateChangeTypes.USER_REGISTERED, payload: registerUserResponse})
        }
    })
    .catch((ex: any) => {
        let errormessage = 'Something went wrong. Please retry';
        if(ex === 'User Already Registered') {
            errormessage = 'User Already Registered';
        }
        if(ex.errors && ex.errors.length > 0) {
            errormessage = ex.errors[0].details;
        }  
        setContextState({
            type: StateChangeTypes.USER_REGISTERED,
            payload: initialState.userRegisteredResponse
        });
    })
}