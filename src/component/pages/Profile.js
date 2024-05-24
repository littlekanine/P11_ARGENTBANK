import Layout from '../layout/Layout';
import UsernameForm from '../form/UsernameForm';
import Account from '../account/Accounts';
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
	const userAccountData = dataBankAccount.find((data) => data.email === user.email);
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
					{userAccountData ? (
						userAccountData.accounts.map((item, index) => (
							<Account key={index} item={item} />
						))
						) : (
						<p>No accounts found for this user.</p>
						)}
				</div>
			</Layout>
		</div>
	);
}

export default Profile;
