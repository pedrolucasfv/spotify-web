import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: rgb(23, 23, 23);
  color: rgb(150, 150, 150);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`
// AQUI TA A ESTILIZAÇÃO DOS COMPONENTES DA ESQUERDA
export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    height: 5rem;
    width: 5rem;
  `}
`
export const Singers = styled.div`
  margin-right: 1rem;
`

export const SongContent = styled.div`
  margin-left: 1rem;
`

export const SongName = styled.div`
  font-size: 1.8rem;
  color: white;
`
// AQUI TA A ESTILIZAÇÃO DOS COMPONENTES DO MEIO
export const ContentMid = styled.div``

export const Control = styled.div`
  svg {
    height: 3rem;
  }
`
export const Icon = styled.div``

export const Progress = styled.div``

// AQUI TA A ESTILIZAÇÃO DOS COMPONENTES DA DIREITA
export const ContentRight = styled.div`
  svg {
    height: 3rem;
  }
`
