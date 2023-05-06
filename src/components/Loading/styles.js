import styled from "styled-components";


export const LoadingConteiner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    width: 100vw;
    height: 100vh;
    background: var(--cor-bg);
    top: 0;
    left: 0;
    overflow: hidden;

    .loadingSVG {

        margin: auto;
        width: 200px;
        height: 200px;
        z-index: 20;
        /* background: red; */
    }


`