import Layout from '../layout/layout';
import UsernameForm from '../form/UsernameForm';
import Account from '../account/account';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import dataBankAccount from '../../datas/dataBankAccount.json'

function Profile() {
	const user = useSelector((state) => state.user);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleUsernameChange = () => {
		setIsEditing(false);
	};
	return (
		<div>
			<Layout>
				<div className="bg-dark flex column align-center height-full">
					<div className="flex column center align-center header">
						<h1 className="text-center">
							Welcome back
							<br />
							{!user.username ? (
								<>
									{user.firstName} {user.lastName} !
								</>
							) : (
								<>{user.username} !</>
							)}
						</h1>
						{isEditing ? (
							<UsernameForm onUsernameChange={handleUsernameChange} />
						) : (
							<>
								<button onClick={handleEditClick} className="edit-button">
									Edit Username
								</button>
							</>
						)}
					</div>
					<h2 className="sr-only">Accounts</h2>
						{dataBankAccount
							.filter((data) => data.email === user.email)[0]
							.accounts.map((item, index) => (
							<Account key={index} item={item} />
							))}
				</div>
			</Layout>
		</div>
	);
}

export default Profile;
