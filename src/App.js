import React, { useState, useEffect } from 'react';

//STYLES
import './styles/App.css';

// ROTAS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// CONTEXT
import { AuthProvider } from "./context/AuthContext"

// FIREBASE
import { onAuthStateChanged } from 'firebase/auth'; //Mapeia se o usuario foi autenticado

// HOOKS
import { useAuthentication } from './hooks/useAuthentication';

// PAGINAS
import Home from './pages/Home/index'
import NotFound from './pages/NotFound/index'
import Profile from './pages/Profile/index'
import Likes from './pages/Likes/index'
import Search from './pages/Search/index'
import About from './pages/About/index'
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Knowledge from './pages/Knowledge';

// Layout
import Layout from './layout';

// Loading
import Loading from './components/Loading';

function App() {





  // CARREGANDO USUARIO
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()
  const loadingUser = user === undefined
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <Loading />
  }
  console.log(user)









  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Layout /> : <Navigate to='/login' />}>
              <Route index element={<Home />} />
              <Route path='profile' element={<Profile />} />
              <Route path='likes' element={<Likes />} />
              <Route path='search' element={<Search />} />
              <Route path='about' element={<About />} />
              <Route path='createPost' element={<CreatePost />} />
              <Route path='knowledge' element={<Knowledge />} />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='register' element={!user ? <Register /> : <Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
