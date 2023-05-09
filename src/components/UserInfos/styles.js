import styled from "styled-components";

export const UserInfosConteiner = styled.div`
        display: flex;
        width: 100%;
        height: 100%;


        .boxes_userInfo{
            display: flex;
            /* width: 100%; */
            height: 80px;
        }
        .boxes_userInfo:nth-child(1){
            width: 30%;
            /* background: yellowgreen; */
            padding: 5px;
        }
        .boxes_userInfo:nth-child(2){
            flex-direction: column;
            justify-content: center;
            width: 70%;
            /* background: tomato; */


            .userInfo_info{
                font-size: .9em;
                display: inline-block;
                /* background: turquoise; */
            }
        }


        @media (max-width: 1200px) {

            .boxes_userInfo{
            /* width: 100%; */
            height: 80px;
            }
            .boxes_userInfo:nth-child(1){
                width: 30%;
                /* background: yellowgreen; */
                padding: 5px;

                img{
                    width: 100%;
                }
            }
            .boxes_userInfo:nth-child(2){
                width: 70%;
                /* background: tomato; */


                .userInfo_info{
                    /* display: none; */
                    display: inline-block;
                    font-size: .7em;
                }
            }

        }












        @media (max-width: 768px) {


            .boxes_userInfo{
            position: relative;
            /* width: 100%; */
            height: 100%;
            padding: 0;
            }
            .boxes_userInfo:nth-child(1){
                width: 20%;
                /* background: yellowgreen; */
                padding: 5px;

                img{
                    width: 80%;
                    margin-left: 5px;
                }
            }
            .boxes_userInfo:nth-child(2){
                width: 80%;
                
                /* background: tomato; */


                .userInfo_info{
                    display: inline-block;
                    font-size: .9em;
                }
            }
        }
        

`