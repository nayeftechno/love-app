import {useEffect} from 'react';
import {useEmployeeStore} from '../contexts/EmployeeContext';
import List from '../components/List';
import Form from '../components/Form';
function Employee(){
    const {fetch} = useEmployeeStore();
    useEffect(()=>{
        fetch()
    },[]);
    return(<div className="row">
        <div className="col-md-4">Statics</div>
        <div className="col-md-4">
            <List/>
        </div>
        <div className="col-md-4">
            <Form/>
        </div>
    </div>);
};
export default Employee;