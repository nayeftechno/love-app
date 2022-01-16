import { useEmployeeStore } from '../contexts/EmployeeContext';
import { observer } from 'mobx-react-lite';
function List() {
    const { getEmployees, getLoading } = useEmployeeStore();
    function renderLoading() {
        return (<li className='list-group-item' style={{ textAlign: 'center' }}>Loading....</li>);
    };
    function renderEmployees() {
        if (getEmployees.length) {
            return (<>
                {
                    getEmployees.map(({ id, name, exist }) => {
                        return (<li className='list-group-item' key={id}>{id} - {name}</li>);
                    })
                }
            </>);
        }
        return (<li className='list-group-item' style={{ textAlign: 'center' }}>No Such Records</li>);
    };
    return (<ul className='list-group'>
        {
            getLoading ? (renderLoading()) : (renderEmployees())
        }
    </ul>);

};
export default observer(List);