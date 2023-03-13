

import styled from "styled-components";

const Container = styled.div`
   max-width: 1500px;
   margin: 0 auto;
`

const Wrapper = styled.div`
  max-width: 1500px;
  padding: 0 178px;
  display: flex;
  justify-content: space-between;
`

const MiddleLeft = styled.div`
   position: relative;
   margin-left: -75px;
`

const MiddleRight = styled.div`
  width: 444px;
  left: 100px;
  padding-left: 47px;
`
const MiddleRightTitle = styled.div`
   font-family: var(--font-family);
   font-style: normal;
   font-weight: 600;
   font-size: 34px;
   line-height: 41px;
   color: var(--primary-black);
   width: 378px;
   margin-top: 100px;
   margin-bottom: 28px;
`
const MiddleRightParagraph = styled.div`
  font-family: font-family;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary-gray);
`
const MiddleCarts = styled.div`
   display: flex;
   justify-content: space-between;
   width: 544px;
   flex-wrap: wrap;
`
const MiddleCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 217px;
`
const Sircle = styled.img`
   
`
const CartText = styled.div`
width: 217px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #6A6A6A;
padding-left: 10px;
`

const Rasm = styled.img``
const Rasm1 = styled.img`
  position:absolute;
  right: -262px;
  top: 52px;
  border-radius: 10px;
`
const Rasm2 = styled.img`
   position:absolute;
   top: 275px;
   left: 470px;
   border-radius: 10px;
   
   
`
const Rasm3 = styled.img`
  position: absolute;
  bottom: 164px;
  left: 570px;
  border-radius: 10px;

`




export {Container, Rasm, Rasm1, Rasm2, Rasm3, CartText,  MiddleCart, Sircle,  MiddleCarts,  MiddleRightParagraph,  Wrapper, MiddleLeft, MiddleRight, MiddleRightTitle}