

import React, { Component } from "react";
import { Container, Wrapper, ChoosTitle, ChoosLeft, Text, Cart, Carts, CartsTitle, CartsText, ChoosRight, Cart2, Cart1, ChoosImg1, ChoosImg2 } from './styled'
import Image from "../../assets/icon/Truck.svg"
import Support from "../../assets/icon/Support.svg"
import ShopBag from "../../assets/icon/Shop bag.svg"
import Returnimg from "../../assets/icon/Return.svg"
import Dot from "../../assets/img/Dot2.svg"
import whyimg from "../../assets/img/why-choose-us-img 1.svg"


class Choos extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <ChoosLeft>
            <ChoosTitle>
              Why Choose Us
            </ChoosTitle>
            <Text>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the
            </Text>
            <Carts>
              <Cart1>
                <Cart>
                  <img src={Image} />
                  <CartsTitle>
                    Fast & Free Shipping
                  </CartsTitle>
                  <CartsText>
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                  </CartsText>
                </Cart>
                <Cart>
                  <img src={Support} />
                  <CartsTitle>
                    24/7 Support
                  </CartsTitle>
                  <CartsText>
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                  </CartsText>
                </Cart>
              </Cart1>
              <Cart2>
                <Cart>
                  <img src={ShopBag} />
                  <CartsTitle>
                    Easy to Shop
                  </CartsTitle>
                  <CartsText>
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                  </CartsText>
                </Cart>
                <Cart>
                  <img src={Returnimg} />
                  <CartsTitle>
                    Hassle Free Returns
                  </CartsTitle>
                  <CartsText>
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                  </CartsText>
                </Cart>
              </Cart2>
            </Carts>

          </ChoosLeft>
          <ChoosRight>
            <ChoosImg2 src={whyimg} />
            <ChoosImg1 src={Dot} />

          </ChoosRight>
        </Wrapper>
      </Container>
    )
  }
}
export default Choos