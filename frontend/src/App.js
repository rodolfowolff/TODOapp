import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/SingleNote/SingleNote';

import './App.css';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <BrowserRouter>
      <Header setSearch={ setSearch } />
      <main>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/login' component={ LoginScreen } />
        <Route exact path='/register' component={ RegisterScreen } />
        <Route exact path='/createnote' component={ CreateNote } />
        <Route exact path='/note/:id' component={ SingleNote } />
        <Route exact path='/mynotes' component={ () => <MyNotes search={ search } /> } />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
