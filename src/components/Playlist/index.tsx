import PlaylistInfo, { PlaylistInfoProps } from 'components/PlaylistInfo'
import Song, { SongsProps } from 'components/Song'
import * as S from './styles'

export type PlaylistProps = {
  playlistInfo: PlaylistInfoProps
  songs: SongsProps[]
}

const Playlist = ({ songs, playlistInfo }: PlaylistProps) => (
  <S.Wrapper>
    <PlaylistInfo {...playlistInfo} />
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
