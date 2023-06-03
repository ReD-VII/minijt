import styled from "styled-components";




import bg_logistc from '../../assets/img/bg_logistc.svg'
import bg_logistc2 from '../../assets/img/bg_logistc2.svg'

export const Conteiner = styled.div`
    width: 100%;
    height: 100%;
    /* background: orange; */
    padding: 20px;


    h1{
        font-size: 1.5em;
    }


    .content_boxes{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 250px;
        margin-top: 10px;
        /* background: wheat; */
    }

    .boxes{
        height: 100%;
        margin: 0 5px;
        padding: 20px;
        border-radius: 4px;
        cursor: pointer;
    }





    .boxes:nth-child(1){
        display: flex;
        flex-direction: column;
        margin-left: 0;
        width: 70%;
        
        /* background: red; */
        background: linear-gradient(to right, #151420, #191c24);
        background-image: url(${bg_logistc});
        /* background: -webkit-linear-gradient(to right, #151420, #191c24); */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* background-size: 100% 100%; */
  
        animation: animateBackground 30s linear infinite;
    
    
        @keyframes animateBackground {
            0% {
                background-position: center;
            }
            50% {
                background-position: top;
            }
            100% {
                background-position: center;
            }
        }
    
    
        h3{
            /* background: red; */
            font-size: 1.6em;
            font-weight: 700;
            width: 40%;
        }
        p{
            /* background: red; */
            width: 50%;
            margin-top: 5px;
            font-size: .8em;
        }
    
    }







    .boxes:nth-child(2){
        display: flex;
        margin-right: 0;
        width: 30%;
        background: linear-gradient(to right, #151420, #191c24);
        background-image: url(${bg_logistc2});
        /* background: -webkit-linear-gradient(to right, #151420, #191c24); */
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;



    }
    .box_info_{
        width: 100px;
        height: 22px;
        margin: auto;
        margin-left: 0px;
        margin-bottom: 0px;
        background: rgba(255, 255, 255, 0.16);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 50px;
    }









    @media (max-width: 768px){

        .content_boxes{
            display: flex;
            flex-direction: column;
            height: 400px;
            /* background: turquoise; */
        }

        .boxes{
            width: 100% !important;
            margin: 5px 0;
            border-radius: 10px;
        }
        h3{
            /* background: red; */
            font-size: 1.2em !important;
            font-weight: 700;
            width: 30%;
        }
        .boxes:nth-child(1){
            height: 250px;
        }
        .boxes:nth-child(2){
            height: 200px;

            .box_info_{
                margin-left: auto;
                margin-right: 10px;
            }
        }



    }





`