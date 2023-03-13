

import React, { Component } from "react";
import {ChoosTitle, ChoosSection, NodrichChair, Container, Wrapper, MainTitle, MainText, Btn, Section, Text, Salary, Increment, Rectang } from './styled'
import Image from "../../assets/img/prod1.svg"
import Image2 from "../../assets/img/product-2.svg"
import Image3 from "../../assets/img/product-3.svg"
import rectangle from '../../assets/img/Rectangle.svg'


class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Section>
            <MainTitle>
              Crafted with excellent material.
            </MainTitle>
            <MainText>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
            </MainText>
            <Btn>Explore</Btn>
          </Section>
          <Section>
            <NodrichChair src={Image} alt="product_1"/>
            <Rectang src={rectangle}/>
            <Text>
              Nodrich CHAIR
            </Text>
            <Salary>
              $50.00
            </Salary>
            <Increment>+</Increment>
          </Section>
          <Section>
           <img src = {Image2}/>
           <Text>Kruzo Aero Chair</Text>
           <Salary>
             $75.00
           </Salary>
          </Section>
          <Section>
           <img src = {Image3}/>
           <Text>Ergonomic Chair</Text>
           <Salary>
             $43.00
           </Salary>
          </Section>
         
        </Wrapper>
        
      </Container>
    )
  }
}

export default Main