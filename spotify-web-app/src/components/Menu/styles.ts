import styled, { css } from 'styled-components'

const styledModifiers = {
  commum: () => css`
    display: flex;
    align-items: center;
    svg {
      height: 3rem;
    }
  `,
  marginSVG: () => css`
    svg {
      margin-right: 1.5rem;
      margin-bottom: 1rem;
    }
  `,
  mouse: () => css`
    cursor: pointer;
    :hover {
      color: white;
    }
  `
}

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  color: darkgray;
  background-color: black;
  height: 100%;

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
  ${styledModifiers.commum()}
  ${styledModifiers.marginSVG()}
  ${styledModifiers.mouse()}
`

export const Search = styled.div`
  ${styledModifiers.commum()}
  ${styledModifiers.marginSVG()}
  ${styledModifiers.mouse()}
`
export const Library = styled.div`
  ${styledModifiers.commum()}
  ${styledModifiers.marginSVG()}
  ${styledModifiers.mouse()}
`

export const MusicLiked = styled.div`
  ${styledModifiers.commum()}
  ${styledModifiers.mouse()}
`
export const IconMusicLiked = styled.div`
  position: relative;
  background-image: linear-gradient(
    to right bottom,
    #0c116f,
    #1e2d80,
    #324690,
    #485f9e,
    #6178aa
  );
  height: 3rem;
  width: 3rem;
  svg {
    position: absolute;
    height: 1.7rem;
    left: 23%;
    top: 25%;
  }
  margin-right: 1.5rem;
  margin-bottom: 1rem;
`
export const CreatePlaylist = styled.div`
  margin-top: 2rem;
  ${styledModifiers.commum()}
  ${styledModifiers.mouse()}
`

export const IconCreatePlaylist = styled.div`
  position: relative;
  background-color: #aeafd1;
  height: 3rem;
  width: 3rem;
  svg {
    color: rgb(35, 35, 35);
    position: absolute;
    height: 2rem;
    left: 18%;
    top: 20%;
  }

  margin-right: 1.5rem;
  margin-bottom: 1rem;
`

export const Playlists = styled.div`
  border-top: 0.1rem solid gray;
  color: darkgray;
  margin-top: 1rem;
`
export const TextPlaylist = styled.h2`
  font-weight: 400;
  margin-top: 0.7rem;
  ${styledModifiers.mouse()}
`
