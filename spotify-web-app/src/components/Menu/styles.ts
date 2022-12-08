import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  color: darkgray;
  background-color: black;
  svg {
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  }
  padding: 2rem;
`
export const Logo = styled.div`
  background-image: url(${'/img/Spotify_Logo_RGB_White.png'});
  background-size: cover;
  background-position: center;
  height: 4.58rem;
  width: 15rem;
  margin-bottom: 3rem;
`
export const LogoContent = styled.div`
  height: 10rem;
`
export const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`

export const Home = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
`
export const Library = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
`

export const CreatePlaylist = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
`

export const MusicLiked = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3rem;
  }
`

export const Playlists = styled.div`
  border-top: 0.1rem solid gray;
  color: darkgray;
  margin-top: 1rem;
`
export const TextPlaylist = styled.h2`
  font-weight: 400;
  margin-top: 0.7rem;
`
