import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { when } from 'mobx';
import { useEmployeeStore } from '../contexts/EmployeeContext';
function Statics() {
    const { getTotal, getExists, getNotExists } = useEmployeeStore();
    useEffect(() => {
        when(() => getTotal > 5, () => {
            console.log(`From Statics : ${getTotal}`);
        });
    }, [getTotal]);
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h6>Total : {getTotal}</h6>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <h6>Exists : {getExists}</h6>
            <h6>{' '}&nbsp;&nbsp;||{' '}&nbsp;&nbsp;</h6>
            <h6>NotExists : {getNotExists}</h6>
        </div>
    </div>);
};
export default observer(Statics);