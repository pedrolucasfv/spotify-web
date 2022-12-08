import * as S from './styles'

export type PlaylistProps = {
  songName: string
  singers: string[]
  album: string
  addData: string
  duration: string
  number: number
  imgAlbum: string
}

const Playlist = ({
  songName,
  addData,
  album,
  duration,
  singers,
  number,
  imgAlbum
}: PlaylistProps) => (
  <S.Wrapper>
    <S.Number>{number}</S.Number>
    <S.Title>
      <S.Image src={imgAlbum} />
      <S.Song>
        <S.SongName>{songName}</S.SongName>
        <S.SingerContent>
          {singers.map((resp) => {
            return <S.Singers key={resp}>{resp} |</S.Singers>
          })}
        </S.SingerContent>
      </S.Song>
    </S.Title>
    <S.Album>{album}</S.Album>
    <S.AddData>{addData}</S.AddData>
    <S.Duration>{duration}</S.Duration>
  </S.Wrapper>
)

export default Playlist
