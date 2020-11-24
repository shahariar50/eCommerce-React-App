import { IContextState, IReduceAction } from '../interfaces/IInterfaces';
import { StateChangeTypes } from './action.types';
import config from '../config';

export const initialState: IContextState = {
    errorMessage: '',
    loggedIn: false,
    user: {
        token: '',
        userProfile:
        {
            username: '',
            logoutTime: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            password: '',
            confirmPassword: '',
            contactNo: 0,
            address: '',
            pincode: 0,
            state: '',
            country: '',
            landmark: '',
            profilePic: '',
        }
    },
    setProfile: {
        username: '',
        logoutTime: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNo: 0,
        address: '',
        pincode: 0,
        state: '',
        country: '',
        landmark: '',
        profilePic: '',
    },
    updateProfile: {
        username: '',
        logoutTime: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNo: 0,
        address: '',
        pincode: 0,
        state: '',
        country: '',
        landmark: '',
        profilePic: ''
    },
    setProduct: {
        id: '',
        product: {
            productSKU: '',
            productTitle: '',
            productDescription: '',
            productStock: 0,
            productCurrency: '',
            productPrice: 0
        }
    },
    updateProduct: {
        id: '',
        product: {
            productSKU: '',
            productTitle: '',
            productDescription: '',
            productStock: 0,
            productCurrency: '',
            productPrice: 0
        }
    },
    isFetching: false,
    registerUser: {
        username: '',
        email: '',
        password: ''
    },
    userRegisteredResponse: null
};

export const reduceStore = (state: IContextState = initialState, action: IReduceAction): IContextState => {
    switch (action.type) {
        case StateChangeTypes.REGISTER:
            return {
                ...state,
                registerUser: action.payload
            };
        case StateChangeTypes.USER_REGISTERED:
            return {
                ...state,
                userRegisteredResponse: action.payload
            };
        case StateChangeTypes.LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload
            };
        case StateChangeTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case StateChangeTypes.SET_PROFILE:
            return {
                ...state,
                updateProfile: action.payload
            };
        case StateChangeTypes.UPDATE_PROFILE:
            return {
                ...state,
                updateProfile: action.payload
            };
        case StateChangeTypes.SET_PRODUCT:
            return {
                ...state,
                setProduct: action.payload
            };
        case StateChangeTypes.UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload
            };
        case StateChangeTypes.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case StateChangeTypes.FETCHING:
            return {
                ...state,
                isFetching: action.payload
            };
        default:
            return state;
    }
};
