import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
function App(){
  return(<>
  <Counter initialState={10}/>
  <LoginForm userName={'Mohammad'} password={'123'} phoneNumber={'+9660789668409'}/>
  </>);
};
export default App;