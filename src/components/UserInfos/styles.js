import styled from "styled-components";

export const UserInfosConteiner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    /* background: purple; */
    margin: 0;


    .boxes_userInfo{
        display: flex;
        height: 100%;
    }
    .boxes_userInfo:nth-child(1){
        justify-content: flex-start;
        align-items: center;
        width: 30%;
        /* background: blue; */




        img{
            width: 90%;
            margin-left: 5px;
        }
    }
    .boxes_userInfo:nth-child(2){
        justify-content: center;
        flex-direction: column;
        
        width: 70%;
        /* background: red; */



        .info_user_userInfo{
            display: flex;
            align-items: center;
            width: calc(100% - 5px);
            margin-left: 5px;
        }
        .info_user_userInfo:nth-child(1){
            /* background: red; */
            height: 20px;
        }
        .info_user_userInfo:nth-child(2){
            /* background: blue; */
            height: 20px;
        }
        p{
            margin: 5px 0;
            margin-left: 0px;
        }
    }




    @media (max-width: 768px) {

        .boxes_userInfo:nth-child(1){
            width: 20%;
            /* background: orange; */
            img{
                position: relative;
                width: 70%;
                margin-left: 10px;
                /* background: red; */
            }
        } 

        .boxes_userInfo:nth-child(2){
            width: 80%;
            .info_user_userInfo{
                margin: 0;
            }
        } 
    }

`