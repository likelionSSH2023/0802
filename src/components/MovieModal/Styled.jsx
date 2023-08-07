import { styled } from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 1200;
    top: 0;
    min-height: 100vh;
    width: 50%;
    padding: 0 25%;
    background-color: rgb(0 0 0 / 71%);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Modal = styled.div`
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background: #111;
    overflow: hidden;
    border-radius: 8px;
    transition: all 400ms ease-in-out 2s;
    animation: fadeIn 400ms;
    min-height: 100vh;
`

export const ModalCloseBtn = styled.span`
    cursor: pointer;
    z-index: 1000;
    color: white;
    position: absolute;
    right: 25%;
    padding: 1%;
`

export const ModalPosterImg = styled.img`
    width: 100%;
    height: auto;
`

export const ModalContent = styled.div`
        padding: 40px;
    color: white;
`

export const ModalDetail = styled.div`
        font-weight: 600;
    font-size: 18px;
`

export const ModalUserPerc = styled.span`
        color: #46d369;
`

export const ModalTitle = styled.h2`
        padding: 0;
    font-size: 40px;
    margin: 16px 0;
`

export const ModalOverview = styled.p`
        font-size: 20px;
    line-height: 1.5;
`