import React, {useRef, useState} from 'react'

import {
  Container,
  Wrapper,
  TextArea,
  Footer,
  Inputs,
  Input,
  ImageIcon,
  Button
} from './styles'

function FeedShare() {

  const inputFile = useRef(null)

  const [file, setFile] = useState('')

  return (
    <Container>
      <Wrapper>
        <TextArea placeholder='Comece a publicar...' />
        <Footer>
          <Inputs>
            <Input 
            ref={inputFile} 
            images 
            type='file'
            accept='image/png, image.jpeg'
            onChange={e => setFile(inputFile.current.files[0].name)}
            />
            <ImageIcon onClick={() => inputFile.current.click()} /></Inputs>
            <Input readOnly={true} value={file} />
          <Button>Publicar</Button>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default FeedShare