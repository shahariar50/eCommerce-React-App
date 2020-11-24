import React, { Reducer } from 'react';
import { IContextState, IProductManagementContext } from '../interfaces/IInterfaces';
import { productManagementContext } from './productmgt.context';

/* 
- Creating Custom Hook - To create a custom hook we prefix "use" infront of it 
- Custom Hook can use another hooks within itself, where as normal function cannot
  Where state is a normal object and reducer is a normal function
*/

export const useStoreContext = (state: IContextState, reducer: Reducer<any, any>): IProductManagementContext => {
  //when we pass the reducer in useReducer now it converts to reducer from the above normal function
  /*Reducer is pure function and has special task to take an initialState and action. Similar to Redux.
  It takes an object as a first parameter and it returns same object same as first parameter,
  Second parameter is action, it takes action based on switch and it modifies it*/
  const [contextState, setContextState] = React.useReducer(reducer, state);
  return {
    contextState,
    setContextState
  };
};

/* Creating context using createContext and exporting it as productMgContext to use in our ContextProvider */
export const productMgContext = React.createContext<IProductManagementContext>(productManagementContext);