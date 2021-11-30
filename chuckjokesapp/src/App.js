import './App.css';
import Provider from './context/Provider';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import JokesPage from './pages/JokesPage'
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <LoginPage /> } />
          <Route exact path='/jokes' element={ <JokesPage /> } />
          <Route exact path='/favorites' element={ <FavoritesPage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
