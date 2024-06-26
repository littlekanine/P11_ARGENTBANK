export const loginUser = async (userName, password) => {
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: userName,
				password: password,
			}),
		});
		if (response.status === 200) {
			const data = await response.json();
			return data.body.token;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Erreur lors de la requête API :', error);
	}
};

export const usersData = async (token) => {
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await response.json();
		return data.body;
	} catch (error) {
		console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
	}
};

export const userName = async (token, username) => {
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				userName: username,
			}),
		});
		if (!response.ok) {
			throw new Error(`Erreur HTTP ! statut : ${response.status}`);
		}
	} catch {
		console.log('toujours pas');
	}
};
