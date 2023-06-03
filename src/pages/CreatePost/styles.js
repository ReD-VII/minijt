import styled from "styled-components";


export const CreateFormStyleConteiner = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background: red; */


  h2{
    text-align: center;
    margin-top: 20px;
    /* background: blue; */
  }

  p{
    margin-top: 20px;
    text-align: center;
  }

  form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: auto;
    padding: 20px;
    /* background: yellowgreen; */
  }

  label{
    display: flex;
    flex-direction: column;
    /* margin: 20px auto; */
    margin-top: 20px;
    margin-bottom: 20px;
    /* background: blueviolet; */

  }
  
  span{
    margin-left: 10px;
  }

  input{
    
    height: 30px;
    border-radius: 40px;
    border: none;
    padding-left: 15px;
    background: #151420;
    border: var(--border_sty01);
    color: white;
    :focus {
      outline: none;
    }
  }
  
  textarea{
    padding: 10px;
    resize: none;
    height: 100px;
    background: #151420;
    border: var(--border_sty01);
    color: white;
    :focus {
      outline: none;
    }
  }

  .btn{
    width: 200px;
    height: 30px;
    margin: auto;
    margin-top: 20px;
    background: var(--bg-btn);
    color: var(--cor-font);
    border-radius: 4px;
    border: none;
  }
  .btn:active{
    background: var(--bg-btn-active);
  }




   /* Estilos para dispositivos móveis */
   @media (max-width: 768px) {
      height: 100%;


      span{
        font-size: .9em;
        margin-bottom: 5px;
        margin-left: 5px;
      }
      form{
        width: 100%;
        /* background: red; */
      }

      .btn{
        margin-top: 50px;
        height: 50px;
      }
   }

`
































































// export const CreateFormStyleConteiner = styled.div`

//     width: 100%;
//     height: 100%;
//     /* background: red; */

//     h1{
//       text-align: center;
//     }

//     .create_post_form_conteiner{
//       display: flex;
//       flex-direction: column;
//       width: 90%;
//       height: 100%;
//       margin: auto;
//       background: blue;
    
    
    
    
//       form{
//         width: 100%;
//         height: 100%;

//         label{
//           background: yellowgreen;
//           display: block;


//           input{
//             width: 300px;
//             height: 40px;
//           }
//         }
//       }
    
    
    
//     }
// `