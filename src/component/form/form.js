import { useState } from "react";
import { useDispatch } from 'react-redux';
import { storeToken, setUser } from '../../feature/user.slice';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const fetchToken = async () => {
        try {
          const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: usernameInput.value,
              password: passwordInput.value,
            }),
        });
        if (response.status === 200) {
            const data = await response.json();
            navigate('/profile');
            return data.body.token;           
        } else {
            const wrongUserName = document.getElementById("username")
            wrongUserName.classList.add("wrong")
            const wrongPassword = document.getElementById("password")
            wrongPassword.classList.add("wrong")
            const wrong = document.getElementById("wrong")
            wrong.classList.remove("none")
            }
        } catch (error) {
            console.error('Erreur lors de la requête API :', error);
        }   
    }; 
    
    const fetchUserDatas = async (token) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            console.log(data)
            return data.body; 
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await fetchToken();
        dispatch(storeToken(token));
        const userDatas = await fetchUserDatas(token);
        dispatch(setUser(userDatas));
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" value={email} onChange={handleUsernameChange} />                
                    </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
    )
}


export default Form