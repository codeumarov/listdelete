import React, { Component } from "react";
import "../../utils/index.css"

import Image from '../../assets/img/couch.svg'
import Image2 from '../../assets/img/Dot.svg'
import { Container, HomePageLeft, HomePageTitle, Wrapper, Btn, HomePageRight, Images, Images2} from './styled'



class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Container>
          <Wrapper>
            <HomePageLeft>
              <HomePageTitle>Modern Interior Design Studio</HomePageTitle>
              <Btn>Show Now</Btn>
              <Btn bg='#2d5248' br='white' ml='14px' col='white'>Explore</Btn>
            </HomePageLeft>
            <HomePageRight>
              <Images src={Image} alt='Couch' />
             <Images2 src={Image2} alt ='Dot'/>
            </HomePageRight>
          </Wrapper>
        </Container>
      </div>
    )
  }
}

export default HomePage