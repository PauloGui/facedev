import styled, {css} from 'styled-components'
import {shade} from 'polished'
import { AiFillHome, AiFillCaretDown } from 'react-icons/ai'
import { FaUsers, FaUserAlt } from 'react-icons/fa'
import { GoTriangleUp } from 'react-icons/go'
import {FiLogOut} from 'react-icons/fi'

export const Container = styled.header`
  background: #8DE4FF;
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`
export const  Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;
`

export const  Left = styled.div`
  display: flex;
  align-items: center;

`

export const  LogoImg = styled.img`
  height: 40px;
`

export const  Right = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const  Button = styled.div`
  background: none;
  border: 0;
  outline: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 100%;

  color: #fff;
  cursor: pointer;
  :hover {
    color: ${shade(0.2, '#575A89')}
  }

  &.active{
    border-bottom: 2px solid #575A89;
    color: #575A89;
  }
`

const gerenalIconsCSS = css`
  width: 24px;
  height: 24px;
`

export const  HomeIcon = styled(AiFillHome)`
  ${gerenalIconsCSS}
`

export const  UsersIcon = styled(FaUsers)`
  ${gerenalIconsCSS}
`

export const  CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ccc;
`

export const  DropProfile = styled.div`
  background: #fff;
  z-index: 5;
  position: absolute;
  margin-top: 125px;
  margin-left: -90px;
  padding: 10px 30px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  button {
    color: #575A89;
    text-decoration: none;
    padding: 5px;
    background: transparent;
    border: 0;
  }
`

export const TriangleDrop = styled(GoTriangleUp)`
  position: absolute;
  z-index: 6;
  color: #FFF;
  right: 31px;
  margin-top: -85px;
`

export const UserProfileIcon = styled(FaUserAlt)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`

export const LogOutIcon = styled(FiLogOut)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`