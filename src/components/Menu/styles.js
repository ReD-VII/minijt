import styled from "styled-components";

export const MenuConteiner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background: var(--cor-bg);
    border-right: 1px solid #262626;


    .boxes_menu_conteiner{
        display: flex;
        width: 100%;
    }
    .boxes_menu_conteiner:nth-child(1){
        justify-content: flex-start;
        align-items: flex-start;
        height: 20%;
        /* background: yellowgreen; */

        .logo_boxes_menu_conteiner{
            width: 120px;
            margin: 20px 20px;
            
        }
    }
    .boxes_menu_conteiner:nth-child(2){
        height: 60%;
        /* background: coral; */

        nav{
            width: 100%;
            /* background: red; */

            ul{
                /* background: green; */

                li{
                    display: flex;
                    align-items: center;
                    margin: 25px 0 0 20px;
                    /* background: blue; */

                    .boxes_links{
                        display: flex;
                        align-items: center;

                    }
                    a{
                        /* margin-top: -2px; */
                        font-size: 1.0em;
                        font-weight: 600;
                        color: var(--cor-font-menu);
                        text-decoration: none;
                        list-style: none;
                    }
                    .boxes_menu_nav_icons{
                        color: var(--cor-icons);
                        margin-right: 15px;
                        font-size: 1.5em;
                    }
                }
            }
        }


    }
    .boxes_menu_conteiner:nth-child(3){
        height: 20%;    
        /* background: chocolate; */
    }
















    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 0;
        width: 100%;
        height: 100%;
        background: var(--cor-bg);
        border-top: 1px solid #262626;


        .boxes_menu_conteiner{
            display: flex;
        }

        .boxes_menu_conteiner:nth-child(1){
            width: 0%;


            .logo_boxes_menu_conteiner{
                display: none;   
            }
        }
        .boxes_menu_conteiner:nth-child(2){
  
            width: 100%;
            height: 100%;
            margin: 0;
            /* background: orange; */
            nav{
                /* background: green; */
                
                
                ul{
                    margin: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 100%;
                    /* background: red; */


                    li{
                        margin: 0;

                        i{
                            display: none;
                         }
                        .boxes_menu_nav_icons{
                            color: var(--cor-icons);
                            margin-right: 0;
                            font-size: 1.8em;
                        }
                    }
                }
            }




        }
        .boxes_menu_conteiner:nth-child(3){
            width: 0%;
            height: 0%;
            background: orange;
        }
    }

    
`