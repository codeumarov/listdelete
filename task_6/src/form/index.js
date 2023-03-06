
import React, { Component } from "react";
import "../form/App.css"
import { Container, Content, Input, Label} from "../form/StyledComponent";


class Forms extends Component {
  render() {
    return (
      <form className="forms">
        <Container >
          <Content >
            <Label>Uesrname</Label>
            <Input placeholder="Your email adress" ype='text'></Input>
          </Content>
          <Content>
            <Label>Password</Label>
            <Input placeholder="password" type="password"></Input>
          </Content>
          <div className="sign">if your not email <span>Sign In</span></div>
        </Container>
      </form>
    )
  }
}

export { Forms }