import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/reducer';

// Combinez vos reducers si vous en avez plus d'un
const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

// Créez votre store en utilisant les reducers combinés
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('Token from localStorage:', sessionStorage.getItem('token'));

export default store;
