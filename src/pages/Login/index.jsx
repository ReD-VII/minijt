import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// STYLES
import { FormsConteiner } from '../../styles/stylesForm'


// LOGO
import logo from '../../assets/img/logo.svg'


const Login = () => {
  const initialStateForm = {
    mail: '',
    passwrd: ''
  };

  const [formData, setFormData] = useState(initialStateForm)
  const [error, setError] = useState('')






  const handleSubmit = (event) => {
    event.preventDefault()
    
    setError('')

    if (formData.passwrd !== formData.confPasswrd1) {
      setError('As senhas precisam ser iguais...')
      return
    }


    console.log('SUBMITADO')
    console.log(`
      Email: ${formData.mail}
      Passwrd: ${formData.passwrd}
    `)

    // REZET FORMULARIO
    setFormData(initialStateForm)
  }




  return (
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
            <input type="password" name="" id="" autoComplete="current-password" onChange={(e) => setFormData({ ...formData, passwrd: e.target.value })} value={formData.passwrd} required />
          </label>
        </div>


        <input className='btn_forms' type="submit" value='Enviar' />

      </form>

    </FormsConteiner>
  )
}

export default Login