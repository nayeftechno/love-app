import {useEmployeeStore} from '../contexts/EmployeeContext';
import {observer} from 'mobx-react-lite';
function List(){
    const {getEmployees} = useEmployeeStore();
    return(<h4>{getEmployees.length}</h4>);
};
export default observer(List);