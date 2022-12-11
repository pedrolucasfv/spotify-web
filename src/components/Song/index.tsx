import * as S from './styles'

export type SongProps = {
  songName: string
  singers: string
  album: string
  addData: string
  duration: number
  number: number
  imgAlbum: string
}

const Song = ({
  songName,
  addData,
  album,
  duration,
  singers,
  number,
  imgAlbum
}: SongProps) => (
  <S.Wrapper>
    <S.Number>{number}</S.Number>
    <S.Title>
      <S.Image src={imgAlbum} />
      <S.Song>
        <S.SongName>{songName}</S.SongName>
        <S.Singers>{singers}</S.Singers>
      </S.Song>
    </S.Title>
    <S.Album>{album}</S.Album>
    <S.AddData>{addData}</S.AddData>
    <S.Duration>{duration}</S.Duration>
  </S.Wrapper>
)

export default Song
