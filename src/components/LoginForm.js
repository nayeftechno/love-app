import img from '../assets/img/1200.gif';
export default function LoginForm({userName,password,phoneNumber}){
    return(<form onSubmit={(e)=>{e.preventDefault()}}>
        <div>
            <img src={img} width={100} height={50} alt='1200.gif' role='presentation'/>
        </div>
        <div>
            <label>{phoneNumber}</label>
        </div>
        <div>
            <input type='text' value={userName} onChange={(e)=>{}}/>
        </div>
        <div>
            <input type='text' value={password} onChange={(e)=>{}}/>
        </div>
        <div role={'button'}>
        <input type="submit" value="Login"/>
        </div>
    </form>);
};