import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { CreateFormStyleConteiner } from './styles'
import { FormConteiner } from '../../styles/Theme/forms'




const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [ rage, setRage ] = useState(10)
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

  }

  return (
    <>
      <h1 style={{
        textAlign: 'center',
        marginTop: '10px',
      }}>Criar post</h1>
      <FormConteiner>
        <div className='form_conteiner'>
          <form >
            <div className='FormGroup'>
              <label>
                <span>Título</span>
                <input type='text' name='title' required onChange={(e) => setTitle(e.target.value)} value={title} />
              </label>
            </div>
            <div className='FormGroup'>
              <label>
                <span>URL da imagem</span>
                <input type='text' name='title' required onChange={(e) => setImage(e.target.value)} value={image} />
              </label>
            </div>
            <div className='FormGroup'>
              <label>
                <span>Rage: {rage}</span>
                {/* <span className='rage'></span> */}
                <input type='range' name='title' required onChange={(e) => setRage(e.target.value)} value={rage} />
              </label>
            </div>
            <div className='FormGroup'>
              <label>
                <span>Conteúdo</span>
                <textarea className="meu-textarea" name='body' required onChange={(e) => setBody(e.target.value)} value={body} />
              </label>
            </div>
            <div className='FormGroup'>
              <label>
                <span>Tags</span>
                <input type='text' name='Tags' required onChange={(e) => setTags(e.target.value)} value={tags} />
              </label>
            </div>
            

            {/* {!loading && <input className='btn_forms' type="submit" value='Enviar' />}
            {loading && <input className='btn_forms' type="submit" value='aguarde...' disabled />} */}
            {/* <input className='btn_forms' type="submit" value='Postar...' /> */}

            <div className='btn_conteiner'>

              <button className='btn_forms' name='' type='submit'>Postar</button>
            </div>
          </form>
          {/* {error &&
          <p className='erro_msg'>{error}</p>
        } */}
        </div>
      </FormConteiner>
    </>
  )
}

export default CreatePost