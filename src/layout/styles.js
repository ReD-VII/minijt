import styled from "styled-components";

export const LayoutConteiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    /* background: red; */



    .boxes_layout{
        height: 100%;
        margin: auto;
    }
    .boxes_layout:nth-child(1){
        width: 14%;
        /* background: violet; */
        border-right: 1px solid #262626;
    }
    .boxes_layout:nth-child(2){
        width: 66%;
        flex-grow: 3;
        overflow: auto;
        /* background: red; */
        ::-webkit-scrollbar {
            width: 0;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
    }
    .boxes_layout:nth-child(3){

        width: 20%;
        /* background: slategray; */
        border-left: var(--border_sty01);

    }












    
  /* Estilos para dispositivos móveis */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    /* background: red; */

    .boxes_layout{
        width: 100% !important;
        /* margin: auto; */
    }
    .boxes_layout:nth-child(1){
        height: 10%;
        /* background: violet; */
    }
    .boxes_layout:nth-child(2){
        height: 80%;
        /* background: blue; */
        overflow: auto;
        /* border-bottom: var(--border_sty01); */
 
    }
    .boxes_layout:nth-child(3){
        height: 10%;
        /* background: greenyellow; */
        border-bottom: var(--border_sty01);
        border-left: none;
    }

    }


    /* .about_layout{
        display: none;
        overflow: hidden;


        li{
            display: none;
        }
    } */
   
`