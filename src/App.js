import React from 'react';
import './styles/App.css';

// ROTAS
import { BrowserRouter, Routes, Route } from "react-router-dom"

// CONTEXT
import { AuthProvider } from "./context/AuthContext"

// FIREBASE
import { onAuthStateChanged } from 'firebase/auth';

// HOOKS
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// PAGINAS
import Home from './pages/Home/index'
import NotFound from './pages/NotFound/index'
import Profile from './pages/Profile/index'
import Likes from './pages/Likes/index'
import Search from './pages/Search/index'
import Aboult from './pages/Aboult/index'
import Login from './pages/Login';
import Register from './pages/Register';

// Layout
import Layout from './layout';

// Loading
import Loading from './components/Loading';

function App() {


  // CARREGANDO USUARIO
  const [ user, setUser ] =useState(undefined)
  const { auth } = useAuthentication()
  const  loadingUser = user === undefined
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])
  if(loadingUser){
    return <Loading />
  }


  return (
    <div className="App">
      <AuthProvider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='profile' element={<Profile />} />
              <Route path='likes' element={<Likes />} />
              <Route path='search' element={<Search />} />
              <Route path='aboult' element={<Aboult />} />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
