import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path='/' component={ LandingPage } />
      <Route exact path='/login' component={ LoginScreen } />
      <Route exact path='/register' component={ RegisterScreen } />
      <Route exact path='/mynotes' component={ () => <MyNotes /> } />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
