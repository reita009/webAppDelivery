import styled from "styled-components";
import bg from '../src/assets/bg.png'
export const Container = styled.div`
    display:flex ;
    height: 100vh ;
    background-color:aqua ;
`;

export const Menu = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    background-color:#136713 ;
    width:80px ;
`;

export const PageBody = styled.div`
    display:flex ;
    background-color:#009E16 ;
    background-image:url(${bg});
    width:100% ;
`;