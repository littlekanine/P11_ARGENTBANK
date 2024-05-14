import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { editUsername } from '../../feature/userSlice';
import { userName } from '../../feature/userAction';
import '../../index.css';

function UsernameForm() {
	const user = useSelector((state) => state.user);
	const [username, setUsername] = useState(user.userName);
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
		} catch (error) {
			console.error("Erreur lors de la soumission du nom d'utilisateur :", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleUsernameSubmit} className="form-user-name">
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<div className="flex row">
					<button type="submit" className="edit-button">
						Save
					</button>
					<button className="edit-button cancel" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default UsernameForm;
