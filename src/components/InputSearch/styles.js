import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  margin-left: 16px;
  width: 350px;

  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px 0 0 2px;

  &:focus{
    background: #fff;
  }
`

export const Button = styled.button`
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 7px 8px;
  border: none;
  outline: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
`

export const Searchicon = styled(FiSearch)``