import PlaylistInfo from 'components/PlaylistInfo'
import Song, { SongsProps } from 'components/Song'
import * as S from './styles'

export type PlaylistProps = {
  songs: SongsProps[]
  
}

const Playlist = ({ songs }: PlaylistProps) => (
  <S.Wrapper>
    <PlaylistInfo />
    <S.Header>
      <S.Number>#</S.Number>
      <S.Title>Título</S.Title>
      <S.Album>ALBUM</S.Album>
      <S.AddData>ADICIONADO EM</S.AddData>
      <S.Duration>DURATION</S.Duration>
    </S.Header>
    {songs.map((song) => {
      return <Song {...song} key={song.songName} />
    })}
  </S.Wrapper>
)

export default Playlist
