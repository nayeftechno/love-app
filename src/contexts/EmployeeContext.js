import {createContext,useContext} from 'react';

const EmployeeContext = createContext();

function EmployeeContextProvider({store,children}){
    return(<EmployeeContext.Provider value={store}>
        {children}
    </EmployeeContext.Provider>);
};

function useEmployeeStore(){
    return useContext(EmployeeContext);
};

export{
    EmployeeContextProvider,
    useEmployeeStore
};