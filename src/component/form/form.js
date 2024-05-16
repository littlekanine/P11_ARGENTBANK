import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, storeToken } from '../../feature/userSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser, usersData } from '../../feature/userAction';

function Form() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const token = await loginUser(username, password);
			if (!token) {
				const wrongUserName = document.getElementById('username');
				wrongUserName.classList.add('wrong');
				const wrongPassword = document.getElementById('password');
				wrongPassword.classList.add('wrong');
				const wrong = document.getElementById('wrong');
				wrong.classList.remove('none');
				return;
			}
			if (token) {
				navigate('/profile');
				dispatch(storeToken(token));
				console.log(token);
				const userData = await usersData(token);
				dispatch(setUser(userData));
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input type="text" id="username" value={username} onChange={handleUsernameChange} />
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input type="password" id="password" value={password} onChange={handlePasswordChange} />
			</div>
			<button className="sign-in-button">Sign In</button>
		</form>
	);
}

export default Form;
