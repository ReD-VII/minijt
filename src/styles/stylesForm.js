import styled from "styled-components";

export const FormsConteiner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: auto;
    /* background: red; */
    background: var(--cor-bg-form);
    margin: 50px auto;
    left: 0;
    right: 0;
    
    border-radius: 4px;

    .form_conteiner_img{
        width: 180px;
        margin: auto;
        margin-top: 50px;
    }


    form{
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 90%;
        margin: auto;
        margin-top: 50px;
        /* background: orange; */
        /* padding-top: 50px; */
        
        .boxes_form{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 70px;
            /* background: blue;   */
        }
        label{
            display: flex;
            flex-direction: column;
            width: 90%;
            /* margin-top: 10px; */
            /* background: red; */

        }
        input{
            height: 35px;
        }
        .btn_forms{
            width: 200px;
            height: 40px;
            margin: 40px auto;
            /* margin: auto; */
            
        }

 
    }
    .erro_msg{
            position: relative;
            /* top: 0px; */
            
            background: red;
            padding: 2px 15px;
            border-radius: 3px;
            /* margin: 25px auto; */
            margin-top: -25px;
            margin-bottom: 20px;
        }

        
  /* Estilos para dispositivos móveis */
  @media (max-width: 768px){
    width: 100%;
    height: 100%;
    /* background: red; */
    background: var(--cor-bg-form);
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 80px 0;
    border-radius: 4px;

    form{
        height: auto;
        /* background: red; */
        padding-bottom: 50px;
    }

  }






`