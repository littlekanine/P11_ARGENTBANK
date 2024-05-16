import Layout from '../layout/layout';
import UsernameForm from '../form/UsernameForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Profile() {
	const user = useSelector((state) => state.user);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleUsernameChange = () => {
		setIsEditing(false);
	};
	// console.log(user.firstName);

	return (
		<div className="height-full">
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
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Checking (x8349)</h3>
							<p className="account-amount">$2,082.79</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Savings (x6712)</h3>
							<p className="account-amount">$10,928.42</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
							<p className="account-amount">$184.30</p>
							<p className="account-amount-description">Current Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
				</div>
			</Layout>
		</div>
	);
}

export default Profile;
