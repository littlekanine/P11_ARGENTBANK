import { useState } from "react";
import { useDispatch } from 'react-redux';
import { storeToken } from '../../action/actionTypes';
import { useNavigate } from 'react-router-dom';

function Form () {
    // const [apiResponse, setApiResponse] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
            email,
            password,
        };
    
        try {
            const apiUrl = 'http://localhost:3001/api/v1/user/login'
            const response = await fetch(apiUrl, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData) 
            });
        if (response.status === 200) {
            const data = await response.json();
            dispatch(storeToken(data));
            navigate('/profile');
            console.log(data)
        } else {
            console.log(email, password)
            }
        } catch (error) {
            console.error('Erreur lors de la requête API :', error);
        }   
    };
    

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