import styled from "styled-components";


export const CreateFormStyleConteiner = styled.div`

    width: 100%;
    height: 100%;
    /* background: red; */

    h1{
      text-align: center;
    }

    .create_post_form_conteiner{
      display: flex;
      flex-direction: column;
      width: 90%;
      height: 100%;
      margin: auto;
      background: blue;
    
    
    
    
      form{
        width: 100%;
        height: 100%;

        label{
          background: yellowgreen;
          display: block;


          input{
            width: 300px;
            height: 40px;
          }
        }
      }
    
    
    
    }
`