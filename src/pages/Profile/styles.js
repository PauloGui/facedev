import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  .column-post {
    width: 100%;
    align-self: center;
    padding: 0 40px 0 155px;

    @media (min-width: 1180px) {
    margin-top: 16px;
  }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  max-width: 1128px;
  margin: 0 auto;
`

export const ContentProfile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`