import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../feature/userSlice';
import { userName } from '../../feature/userAction';
import '../../index.css';

function UsernameForm({ onUsernameChange }) {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [username, setUsername] = useState(user.userName || '');
	const [isEditing, setIsEditing] = useState(true);

	const handleCancelEdit = () => {
		setIsEditing(false);
	};

	const handleCancel = () => {
		handleCancelEdit();
	};

	const handleUsernameSubmit = async (e) => {
		e.preventDefault();
		try {
			await userName(user.token, username);
			onUsernameChange(username);
			dispatch(setUser({ ...user, userName: username }));
		} catch (error) {
			console.error("Erreur lors de la soumission du nom d'utilisateur :", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleUsernameSubmit} className="form-user-name">
				<div className="">
					<div className="flex row center align-center gap10">
						<p>User name :</p> <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-imput" />
					</div>
					<div className="flex row center align-center gap10">
						<p>First name :</p> <input type="text" value={user.firstName} readonly="readonly" className="lock form-imput" />
					</div>
					<div className="flex row center align-center gap10">
						<p>Last name :</p> <input type="text" value={user.lastName} readonly="readonly" className="lock form-imput" />
					</div>
					<div className="flex row center gap20">
						<button type="submit" className="edit-button">
							Save
						</button>
						<button className="edit-button cancel" onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default UsernameForm;
