import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/index';

import classes from './Header.module.css';

const Header = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {authenticated && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
