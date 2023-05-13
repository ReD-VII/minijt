import React, { useEffect, useState } from 'react'

// STYLES
import { FormsConteiner } from '../../styles/stylesForm'


// LOGO
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';


const Register = () => {
  const initialStateForm = {
    name: '',
    mail: '',
    passwrd: '',
  };

  
  const [confPasswrd, setConfPasswrd] = useState('')
  const [formData, setFormData] = useState(initialStateForm)
  const [error, setError] = useState(null)


  const { createUser, error: authError, loading } = useAuthentication()


  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    if (formData.passwrd !== confPasswrd) {
      setError('As senhas precisam ser iguais...')
      return
    }


    const resp = await createUser(formData)





    console.log('SUBMITADO')
    console.log(`
      Nome: ${formData.name}
      Email: ${formData.mail}
      Passwrd: ${formData.passwrd}
    `)

    // REZET FORMULARIO
    setFormData(initialStateForm)
    setConfPasswrd('')
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
              <span>Nome</span>
              <input type="text" name="username" autoComplete="username" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" autoComplete="email" onChange={(e) => setFormData({ ...formData, mail: e.target.value })} value={formData.mail} required />
            </label>
          </div>
          {/* <div className='boxes_form'>
            <label>
              <span>ID JMS</span>
              <input type="text" name="idjms" id="idjms" onChange={(e) => setFormData({ ...formData, idjms: e.target.value })} value={formData.idjms} required />
            </label>
          </div> */}
          <div className='boxes_form'>
            <label>
              <span>Password</span>
              <input type="password" name="password" id="password" autoComplete="current-password" onChange={(e) => setFormData({ ...formData, passwrd: e.target.value })} value={formData.passwrd} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Password</span>
              <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="confirm-password" onChange={(e) => setConfPasswrd(e.target.value)} value={confPasswrd} required />
            </label>
          </div>

          {!loading && <input className='btn_forms' type="submit" value='Enviar' />}
          {loading && <input className='btn_forms' type="submit" value='aguarde...' disabled />}

        </form>
        {error &&
          <p className='erro_msg'>{error}</p>
        }
      </FormsConteiner>
    </>
  )
}

export default Register