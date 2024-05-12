const initialState = {
  token: sessionStorage.getItem('token') || null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_TOKEN':
        sessionStorage.setItem('token', JSON.stringify(action.payload));
        return {
          ...state,
          token: action.payload
        };
        case 'LOGOUT':
          sessionStorage.removeItem('token');
          return {
            ...state,
            token: null
          };
      default:
        return state;
    }
  };
  
  export default authReducer;
  