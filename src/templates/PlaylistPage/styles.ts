import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 61rem 12.5%;
`
export const Menu = styled.div`
  grid-row: 1;
`
export const Playlist = styled.div`
  grid-row: 1;
  grid-column: 2;
`
export const Player = styled.div`
  grid-row: 2;
  grid-column: 1/3;
`

export const TEST = styled.div``
