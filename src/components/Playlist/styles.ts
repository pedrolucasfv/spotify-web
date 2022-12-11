import styled from 'styled-components'

export const Wrapper = styled.main`
  font-size: 1.5rem;
  background-image: linear-gradient(
    to bottom,
    #60bc74,
    #488e57,
    #31623c,
    #1c3a22,
    #041606
  );
  color: white;
`

export const Number = styled.div`
  margin-right: 2rem;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 3;
`
export const SongName = styled.div`
  font-size: 1.7rem;
`
export const SingerContent = styled.div`
  display: flex;
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
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem gray solid;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
`

export const Duration = styled.div``

export const Musics = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  );
  height: 40rem;
  overflow: scroll;
`
