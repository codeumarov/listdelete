
import '../../utils/index.css'
import styled from "styled-components";
import { ReactComponent as user } from '../../assets/icon/User.svg'
import { ReactComponent as cart } from '../../assets/icon/Cart.svg'

const Container = styled.header`
     width: 100%;
     background-color: var(--primary-greens)
`


const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1500px;
   height: 100%;
   padding: 0 178px;
   margin: 0 auto;
   background-color: var(--primary-greens);
`

const Ol = styled.ol`
 display: flex;
 justify-content: space-between;
 align-items: center;
 list-style: none;
 gap: 43px;
 box-sizing:border-box;
`

const HeaderLeft = styled.div` 
   list-style: none;
   display: flex;
   justify-content: space-between;
   width: 620px;
`

const Left = styled.div`
   display: flex;
   margin-bottom: 50px;
   gap: 25px;
`


const Li = styled.li`
  direction: inline-block;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-bottom: 7px;
  color: var(--primary-white);
  opacity: 0.5;

  :hover{
    box-shadow: 0px 4px 0px 0px var(--primary-yellow);
    color: var(--primary-white);
    opacity: 1;
  }
   
`


const Logo = styled(user)``
const Cart = styled(cart)``


const Image = styled.img`
   width: 86px;
   height:39px;
`


const ModernLeft = styled.div`


`
const Modern = styled.div`

  
`
const ModernTitle = styled.div``

export { Container, Wrapper, Logo, Cart, Image, Ol, Li, HeaderLeft, Left,  ModernLeft, Modern, ModernTitle}


