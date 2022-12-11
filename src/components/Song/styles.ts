import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
`

export const Number = styled.div`
  margin-right: 2rem;
`
export const Song = styled.div``
export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 3;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    height: 3rem;
    width: 3rem;
    margin-right: 1.5rem;
  `}
`
export const SongName = styled.div`
  font-size: 1.7rem;
`
export const Singers = styled.div`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`
export const Album = styled.div`
  flex-grow: 2;
`
export const AddData = styled.div`
  flex-grow: 1;
`
export const Duration = styled.div`
  background: linear-gradient();
`
