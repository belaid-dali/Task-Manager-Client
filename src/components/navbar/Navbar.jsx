import './Navbar.scss';
import '../../styles/components/_buttons.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../reducers/authSlice';
import history from '../../history';

const Navbar = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logoutSuccess());
        localStorage.removeItem('auth');
        history.push('/signin');
        window.location.reload();
    };

    return (
        <div>
            <nav className='header'>
                <div className='header__logo'>
                    {/* Wrap the h5 tag with Link to make it clickable */}
                    <Link to="/" className='header__home-link'>
                        <h5>Task Manager</h5>
                    </Link>
                </div>
                <div className='header__buttons'>
                    {auth.currentUser && auth.currentUser.token ? (
                        <Link to='/signin' className='button' onClick={handleClick}>
                            SignOut
                        </Link>
                    ) : (
                        <>
                            <Link to='/signin' className='button'>
                                Sign In
                            </Link>
                            <Link to='/signup' className='button'>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
