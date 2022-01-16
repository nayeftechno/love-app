import { useEmployeeStore } from '../contexts/EmployeeContext';
import { observer } from 'mobx-react-lite';
function List() {
    const { getEmployees, getLoading, setChecked, deleteEmployee } = useEmployeeStore();
    function renderLoading() {
        return (<li className='list-group-item' style={{ textAlign: 'center' }}>Loading....</li>);
    };
    function renderEmployees() {
        if (getEmployees.length) {
            return (<>
                {
                    getEmployees.map(({ id, name, exist }) => {
                        return (<li className='list-group-item' key={id}>
                            <span>{id} - {name}</span>
                            <div style={{ float: 'right', display: 'flex', alignItems: 'center', width: 60, justifyContent: 'space-between' }}>
                                <div>
                                    <input type={'checkbox'} checked={exist} onChange={() => { setChecked({ id, name, exist }) }} />
                                </div>
                                <div>||</div>
                                <div>
                                    <a style={{ cursor: 'pointer' }} onClick={() => { deleteEmployee({ id, name, exist }) }}>X</a>
                                </div>
                            </div>
                        </li>);
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