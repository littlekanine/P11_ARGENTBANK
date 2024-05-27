import './account.css';

function Account({ item }) {
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{item.type}</h3>
				<p className="account-amount">${item.balance}</p>
				<p className="account-amount-description">{item.description}</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}

export default Account;
