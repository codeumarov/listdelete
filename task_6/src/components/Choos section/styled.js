import styled from "styled-components";

const Container = styled.div`
 max-width: 1500px;
 
 background-color: var(--primary-white);
`
const Wrapper = styled.div`
   max-width: 1500px;
   display: flex;
   justify-content: space-between;
   padding: 0 178px;
`

const ChoosLeft = styled.div`
   /* width: 572px; */
`

const ChoosTitle = styled.div`
   font-family: var(--font-family);
   font-style: normal;
   font-weight: 600;
   font-size: 34px;
   line-height: 41px;
   color: var(--primary-black);
   margin-bottom:  27px;
`
const Text = styled.p`
  width: 444px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary-grey);
  margin-bottom: 88px;
`
const Cart = styled.div`
   
  
`
const Carts = styled.div`

`

const Cart1 = styled.div`
  display: flex;
  justify-content:space-between;
  width: 505px;
  margin-bottom: 26px;
`
const Cart2 = styled.div`
  display: flex;
  justify-content:space-between;
  width: 505px;
`
const CartsTitle = styled.div`
   margin-top: 12px; 
   margin-bottom: 9px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 22px;   
   color: var(--primary-black);
`
const CartsText = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6A6A6A;
  width: 222px;
`
const ChoosRight = styled.div`
   position: relative;
   padding-left: 200px;

`

const ChoosImg1 = styled.img`
    position: relative; 
    bottom: 685px;
    right: 75px;  
   
`
const ChoosImg2 = styled.img`
    position: relative;
    z-index: 999;
`

export { ChoosImg2, ChoosImg1, Cart1, Cart2, Cart, ChoosRight, Container, Wrapper, ChoosTitle, ChoosLeft, Text, Carts, CartsTitle, CartsText }