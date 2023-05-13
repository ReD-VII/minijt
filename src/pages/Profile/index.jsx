//PROFILE PAGE


import React from 'react'



// HOOKS
// import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'


const Profile = () => {
  const { user } = useAuthValue() // Pega o usuario disponibilizado no provider
  const { logout } = useAuthentication()
  if(user){
    console.log(user)
  }
  return (
    <div>

      {user && (
        <>
          <h4>Olá, {user.displayName}</h4>
          <h4>Email: {user.email}</h4>
          <h4>ID JMS: {user.idjms}</h4>
          <p style={{ background: "red" }}>SO E EXIBIDO PARA USUÁRIOS LOGADOS</p>
        </>


      )}
      {user &&
        <button onClick={logout}>Sair</button>
      }

    </div>
  )
}

export default Profile