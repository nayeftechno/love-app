import {observer} from 'mobx-react-lite';
import {useEmployeeStore} from '../contexts/EmployeeContext';
function Search(){
    const {searchWithTerm} = useEmployeeStore();
    return(<p>{searchWithTerm('f')} includes <strong>F</strong></p>);
};
export default observer(Search);