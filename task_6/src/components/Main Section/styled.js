

import styled from 'styled-components'
import "../../utils/index.css"
import Imgt from "../../assets/img/Rec.svg"

const Container = styled.div`
   max-width: 1500px;
   height: 100vh;
   margin: 0 auto;

`

const Wrapper = styled.div`
   width: 1500px;
   padding: 0 177px;
   display: flex;
   justify-content: space-between;
`

const Btn = styled.button`
  width: 122px;
  height: 50px;
  border-radius: 30px;
  border: none;
  color: var(--primary-white);
  background-color: var(--primary-black);
  cursor: pointer;
`


const MainText = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #6A6A6A;
  margin-bottom: 33px;
`

const MainTitle = styled.h1`
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 27px;
    color: var(--primary-black)
`
const Section = styled.div`
     width: 200px;
     margin-top: 164px;
`
const Text = styled.h1`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 41px;
  position: relative;
  text-align: center;
`
const Salary = styled.p`
  position: relative;
  text-align: center;
  font-size: 18px;
  font-family: var(--font-family);
  color: var(--primary-black);
  font-weight: 600;
  
`
const Increment = styled.button`
   text-align: center;
   cursor: pointer;
   margin-left: 82px;
   margin-top: 7px;
   height:35px;
   width: 35px;
   border-radius: 50%;
   font-size: 20px;
   color: var( --primary-white);
   background-color: var(--primary-black);
   border: none;
`
const Rectang = styled.img`
   position: absolute;
   right: 770px;
   top: 910px;
`
const NodrichChair = styled.img`
     position: relative;
     bottom: 50px;
     z-index: 999;
`

/* Choose section */

const ChoosSection = styled.div``
const ChoosTitle = styled.h1``

export {ChoosTitle, ChoosSection, NodrichChair, Increment, Container, Wrapper, MainTitle, MainText, Btn, Section, Text, Salary, Rectang}