import styled, {css} from 'styled-components'
import {shade} from 'polished'
import { Form } from '@unform/web'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  background: #8DE4FF;
`

export const WrapperDrop = styled.div``

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 80px;
`

export const ImgLogo = styled.img``

export const SignUpButton = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background: #575A89;
  color: #FFF;
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;

  :hover{
    background: ${shade(0.2, '#575A89')};
  }

  ${props => props.login && css`
    width: 100px;
    align-self: flex-start;
    margin-top: 10px;
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const FormUnform = styled(Form)`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextLogin = styled.p`
  align-self: flex-start;
  padding-left: 5px;
  color: #575A89;
  font-size: 16px;
  font-weight: 500;

  ${props => props.subtitle && css`
    padding: 0 0 0 90px;
    width: 525px;
    font-size: 22px;
    position: absolute;
    bottom: 50px;
  `}
`

export const ImgBanner = styled.img``