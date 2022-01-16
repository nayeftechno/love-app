import {useState,useEffect,useRef} from 'react';
import {observer} from 'mobx-react-lite';
import {useEmployeeStore} from '../contexts/EmployeeContext';
function Form(){
    const inputRef = useRef(null);
    const [] = useState({name : '',exist : false});
};
export default observer(Form);