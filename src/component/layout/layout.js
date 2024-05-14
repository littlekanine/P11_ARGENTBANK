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
	// const user = useSelector((state) => state.user)
	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<div className="height-full">
			<nav className="main-nav">
				<Link to="/">
					<img src={logo} className="main-nav-logo-image" alt="Logo de Argent-Bank" />
				</Link>
				{token ? (
					<div className="flex nav-link align-center">
						<div className="flex align-center">
							<i className="fa fa-user-circle"></i>
							<li className="no-bullets">
								<Link to="/profile" className="link">
									Pierrick
								</Link>
							</li>
						</div>
						<div className="flex align-center">
							<i className="fa-solid fa-right-from-bracket"></i>
							<li className="no-bullets">
								<Link to="/" className="link" onClick={handleLogout}>
									Déconnexion
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

			<main className="height-main">{children}</main>

			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</div>
	);
}

export default Layout;
