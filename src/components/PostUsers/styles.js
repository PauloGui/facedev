import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BoxPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFF;
  border-radius: 10px;
  padding: 10px;

  & + div {
    margin-top: 10px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const Strong = styled.strong``

export const Span = styled.span`
  font-size: 12px;
`

export const TextPost = styled.span`
  padding: 10px;
  font-size: 14px;
  text-align: justify;
`
