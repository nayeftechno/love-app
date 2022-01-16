import List from '../components/List';
import Form from '../components/Form';
import Statics from '../components/Statics';
function Employee(){
    return(<div className="row">
        <div className="col-md-4">
            <Statics/>
        </div>
        <div className="col-md-4">
            <List/>
        </div>
        <div className="col-md-4">
            <Form/>
        </div>
    </div>);
};
export default Employee;