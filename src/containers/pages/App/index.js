import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/' exact component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
