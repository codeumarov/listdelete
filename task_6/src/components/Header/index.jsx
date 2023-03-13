


import React, { Component } from "react";
import { Container, Wrapper, Logo, Cart, Image, Ol, Li, HeaderLeft, Left, ModernLeft, Modern, ModernTitle } from './style'
import FurneImg from '../../assets/img/Furni..svg'

class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Image src={FurneImg} alt='hero'></Image>
          <HeaderLeft>
            <Ol>
              <Li>Home</Li>
              <Li>About us</Li>
              <Li>Service</Li>
              <Li>Blog</Li>
              <Li>Contac us</Li>
            </Ol>
            <Left>
              <Logo />
              <Cart />
            </Left>
          </HeaderLeft>
        </Wrapper>
      </Container>
    )
  }
}
export default Header