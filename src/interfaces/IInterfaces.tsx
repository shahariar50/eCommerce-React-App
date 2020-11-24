import IUserProfile from './IUserProfile';
import ISingleProduct from './IProducts';

export interface IUser {
    token: string;
    userProfile: IUserProfile;
}

export interface IUpdateProfile {
    updateProfile: IUserProfile
}

export interface IUserLoggedIn {
    loggedIn: boolean
}

export interface IProduct {
    id: string;
    product: ISingleProduct;
}

export interface IUserRegister{
    username: string;
    email: string;
    password: string;
}

export interface IUserRegisteredResponse{
    token: string,
    username: string,
    avatar: string
}

export interface IContextState {
    errorMessage: string;
    user: IUser;
    loggedIn: boolean;
    setProfile: IUserProfile;
    updateProfile: IUserProfile;
    setProduct: IProduct;
    updateProduct: IProduct;
    isFetching: boolean;
    registerUser: IUserRegister;
    userRegisteredResponse: IUserRegisteredResponse | null;
}

export interface IReduceAction {
    type: string;
    payload?: any;
}

export interface IProductManagementContext {
    contextState: IContextState;
    setContextState: (action: any) => void;
}
