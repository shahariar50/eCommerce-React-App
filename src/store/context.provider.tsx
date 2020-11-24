import React from 'react';
import { useStoreContext, productMgContext } from './index';
import {initialState, reduceStore} from './reducer';
import { IProductManagementContext } from '../interfaces/IInterfaces';
import PropTypes from 'prop-types';

export interface IProps{
    children: any;
};

const ContextProvider: React.FC<IProps> = ({children}) => {
   const storeContext: IProductManagementContext = useStoreContext(initialState, reduceStore);
    return(
        <productMgContext.Provider value={storeContext}>
            {children}
        </productMgContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.any
}

export default ContextProvider;
/* import React from 'react';
import { IProductManagementContext } from '../interfaces/IInterfaces';
import { useStoreContext, productMgContext } from './index';
import { initialState, reduceStore } from './reducer';
import PropTypes from 'prop-types';


const ContextProvider: React.FC = (props) => {
    const storeContext: IProductManagementContext = useStoreContext(initialState, reduceStore);
    return (
        <productMgContext.Provider value={storeContext}>
        { props.children }
        </productMgContext.Provider>
    )};

ContextProvider.propTypes = {
    children: PropTypes.any
}
export default ContextProvider; */