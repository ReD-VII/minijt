import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// STYLES
import { FormsConteiner } from '../../styles/stylesForm'


// LOGO
import logo from '../../assets/img/logo.svg'


// HOOKS

import { useAuthentication } from '../../hooks/useAuthentication'



const Login = () => {
  const initialStateForm = {
    mail: '',
    passwrd: ''
  };

  const [formData, setFormData] = useState(initialStateForm)
  const [error, setError] = useState('')
  const { login, error: authError, loading } = useAuthentication()





  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    const resp = await login(formData)





    console.log('SUBMITADO')

    // REZET FORMULARIO
    setFormData(initialStateForm)
  }


  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <>
      <FormsConteiner>
        <Link to='/'>
          <img src={logo} alt="logo" className='form_conteiner_img' />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className='boxes_form'>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" autoComplete="email" onChange={(e) => setFormData({ ...formData, mail: e.target.value })} value={formData.mail} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Password</span>
              <input type="password" name="password" id="password" autoComplete="current-password" onChange={(e) => setFormData({ ...formData, passwrd: e.target.value })} value={formData.passwrd} required />
            </label>
          </div>


          {!loading && <input className='btn_forms' type="submit" value='Entrar' />}
          {loading && <input className='btn_forms' type="submit" value='aguarde...' disabled />}

        </form>
        {error &&
          <p className='erro_msg'>{authError}</p>
        }
      </FormsConteiner>

      <Link style={{
        position: "absolute",
        margin: 'auto',
        left: "0",
        right: "0",
        bottom: "10px",
        textAlign: "center",
        // background: "red",
        color: "#fff"
      }} to="/register">Não tem uma conta?</Link>
    </>
  )
}

export default Login