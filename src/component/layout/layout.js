import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import './layout.css';
import { useSelector } from 'react-redux';
import { logout } from '../../feature/userSlice';
import { useDispatch } from 'react-redux';

function Layout({ children }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state) => state.user.token);
	const user = useSelector((state) => state.user);
	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<div className="height-full flex column">
			<nav className="main-nav">
				<Link to="/">
					<img src={logo} className="main-nav-logo-image" alt="Logo de Argent-Bank" />
				</Link>
				{token ? (
					<div className="flex nav-link align-center">
						<div className="flex center align-center">
							<i className="fa fa-user-circle icon"></i>
							<li className="no-bullets">
								<Link to="/profile" className="link">
									{!user.username ? <>{user.firstName} </> : <>{user.username} </>}
								</Link>
							</li>
						</div>
						<div className="flex align-center">
							<i className="fa fa-sign-out icon"></i>
							<li className="no-bullets">
								<Link to="/" className="link" onClick={handleLogout}>
									Sign Out
								</Link>
							</li>
						</div>
					</div>
				) : (
					<div>
						<Link to="/Login" className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Sign-In
						</Link>
					</div>
				)}
			</nav>

			<main className="height-full main ">{children}</main>

			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</div>
	);
}

export default Layout;
