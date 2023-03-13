

import React, { Component } from "react";
import { Container, Wrapper, MiddleLeft, MiddleRight, MiddleRightTitle, MiddleRightParagraph, MiddleCarts, MiddleCart, Sircle, CartText, Rasm, Rasm1, Rasm2, Rasm3} from './styled'
import Image from "../../assets/img/Dot (2).svg"
import Image2 from "../../assets/img/img-grid-1 1.svg"
import Image3 from "../../assets/img/img-grid-3 1.svg"
import Image4 from "../../assets/img/img-grid-2 1.svg"
import ImgCircl from "../../assets/img/Ellipse 66.svg"

class Middle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <MiddleLeft>
            <Rasm src={Image} />
            <Rasm1 src={Image2} />
            <Rasm2 src={Image3} />
            <Rasm3 src={Image4} />
          </MiddleLeft>
          <MiddleRight>
            <MiddleRightTitle>
              We help you make Modern Interior Design
            </MiddleRightTitle>
            <MiddleRightParagraph>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.
            </MiddleRightParagraph>
            <MiddleCarts>
              <MiddleCart>
                <Sircle src={ImgCircl} alt="circl">
                </Sircle>
                <CartText>
                  Donec mattis porta eros,let aliquet finibus ri
                </CartText>
              </MiddleCart>
              <MiddleCart>
                <Sircle src={ImgCircl} alt="circl">

                </Sircle>
                <CartText>
                  Donec mattis porta eros,let aliquet finibus ri
                </CartText>
              </MiddleCart>
              <MiddleCart>
                <Sircle src={ImgCircl} alt="circl">

                </Sircle>
                <CartText>
                  Donec mattis porta eros,let aliquet finibus ri
                </CartText>
              </MiddleCart>
              <MiddleCart>
                <Sircle src={ImgCircl} alt="circl">

                </Sircle>
                <CartText>
                  Donec mattis porta eros,let aliquet finibus ri
                </CartText>
              </MiddleCart>
            </MiddleCarts>
          </MiddleRight>
        </Wrapper>
      </Container>
    )
  }
}

export default Middle