import Main from "./screens/Main";
import {EmployeeContextProvider} from './contexts/EmployeeContext';
import EmployeeStore from "./store/EmployeeStore";
const store = new EmployeeStore();
export default function App(){
  return(<EmployeeContextProvider store={store}>
    <Main/>
  </EmployeeContextProvider>);
};