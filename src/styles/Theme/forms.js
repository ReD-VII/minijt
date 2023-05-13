import styled from "styled-components";


const blackTheme = {
    border: '1px solid #262626',
    background: '#040608',
    fontColor: '#E6EDF3',
    inputFontColor: '#FFFFFF',
    btnColor: '#2600ff',
    btnColorActive: '#684eff',
}






export const FormConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* background: red; */
    font-weight: 400;

    form{
    
        /* background: yellowgreen; */
    }



    .form_conteiner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
        width: 600px;
        /* background: tomato; */
    }
    .form_conteiner .FormGroup{
        display: flex;
        margin: auto;
        /* background: red; */
    }
    .form_conteiner .FormGroup label{
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
        /* background-color: aqua; */
        margin: 10px;


    }
    input{
        width: 500px;
        height: 30px;
        border-radius: 100px;
        padding-left: 12px;
        border: ${blackTheme.border};
        background: ${blackTheme.background};
        color: ${blackTheme.inputFontColor};
        
    }
    
    input:focus {
        outline: none;
        border-color: none;
    }
    span{
        flex: 1;
        color: ${blackTheme.fontColor};
        text-align: right;
        margin-right: 8px;
        /* background: red; */
    }
    .meu-textarea {
        width: 500px;
        height: 150px;
        background: ${blackTheme.background};
        resize: none;
        border: ${blackTheme.border};
        border-radius: 4px;
        color: ${blackTheme.inputFontColor};
        padding: 8px;
    }
    .meu-textarea:focus {
        outline: none;
        border-color: none;
    }

    .btn_conteiner{
        display: flex;
        justify-content: center;
    }
    .btn_forms{
        /* position: absolute; */
        width: 400px;
        height: 30px;
        
        margin-top: 40px;
        margin-right: auto;
        margin-bottom: 40px;
        margin-left: auto;
        background: ${blackTheme.btnColor};
        border-radius: 4px;
        border: none;
        color: ${blackTheme.fontColor};
        font-weight: 700;
        z-index: 1;
    }
    .btn_forms:active{
        background: ${blackTheme.btnColorActive};
    }



    @media (max-width: 608px) {
        .form_conteiner{
            width: 100%;
        }
        label{
            flex-direction: column;
            justify-content: center;
            width: 100%;
            /* background: red; */



        }
        span{
            text-align: left;
            margin-left: 5%;
            margin-bottom: 5px;
        }
        input{
          width: 90%;        
          margin: auto;
        }
        .meu-textarea {
            width: 85%;
            margin: auto;
        }
    
        .btn_forms{
            width: 250px;
            z-index: 1 !important;
        }
    }

`