import {Link} from 'react-router-dom';
function Navbar(){
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light container">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={'/home'}>Home</Link>
        </li>
        ||
        <li className='nav-item'>
            <Link to={'/about'}>About</Link>
        </li>
        ||
        <li className='nav-item'>
            <Link to={'/contact'}>Contact</Link>
        </li>
        ||
        <li className='nav-item'>
            <Link to={'/employee'}>Employee</Link>
        </li>
      </ul>
    </div>
  </nav>);
};
export default Navbar;