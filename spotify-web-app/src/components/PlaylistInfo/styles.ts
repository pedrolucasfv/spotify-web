import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: rgb(65, 65, 65);
  color: white;
  display: flex;

  padding: 3rem;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    height: 10rem;
    width: 10rem;
    padding: 10rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2rem;
`

export const Title = styled.h4``

export const Name = styled.h1`
  font-size: 3.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`

export const Text = styled.div`
  font-size: 1.2rem;
`
