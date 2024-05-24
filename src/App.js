import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './component/routes/Route';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className='height-full'>
        <Router>
          <CustomRoutes />
        </Router>
      </div>
    </Provider>
  )
}

export default App;
