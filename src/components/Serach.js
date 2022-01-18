import {observer} from 'mobx-react-lite';
import {useEmployeeStore} from '../contexts/EmployeeContext';
import {useEffect} from 'react';
function Search(){
    useEffect(()=>{
        console.log('render');
    });
    const {searchWithTerm} = useEmployeeStore();
    return(<p>{searchWithTerm('f')} includes <strong>F</strong></p>);
};
export default observer(Search);