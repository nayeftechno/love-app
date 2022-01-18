import List from '../components/List';
import Form from '../components/Form';
import Statics from '../components/Statics';
import Search from '../components/Search';
function Employee(){
    return(<div className="row">
        <div className="col-md-4">
            <Statics/>
        </div>
        <div className="col-md-4">
            <Search/>
            <List/>
        </div>
        <div className="col-md-4">
            <Form/>
        </div>
    </div>);
};
export default Employee;