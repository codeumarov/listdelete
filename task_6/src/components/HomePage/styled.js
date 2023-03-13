

import styled from "styled-components";
import "../../utils/index.css"


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--primary-greens)
`

const Wrapper = styled.div`
   width: 1500px;
   height: 581px;
   margin: 0 auto;
   background-color: var(--primary-greens);
   background-color: var();
   padding: 0 177px;
   display: flex;
`

const HomePageLeft = styled.div``
const HomePageRight = styled.div`
   position: relative;
`

const HomePageTitle = styled.h1`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
  color: var(--primary-white);
  width: 419px;
  margin-top: 112px;
`

const Btn = styled.button`
    width: 150px;
    height: 50px;
    border-radius:30px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.bg ? props.bg : 'yellow'};
    border: ${(props) => props.br ? '1px solid white' :'none' };
    margin-left: ${(props) => props.ml? props.ml : '0'};
    color: ${(props) => props.col ? props.col : 'none'};
    margin-top: 117px;
    

`

const Images = styled.img`
  position: relative;
  left: 20px;
  margin-top: 22px;
  z-index: 999;
`
const Images2 = styled.img` 
   position: absolute;
   bottom: 300px;
   right: -10px;
   z-index: 1;
`



export {Container, HomePageLeft, HomePageTitle, Wrapper, Btn, HomePageRight, Images, Images2}