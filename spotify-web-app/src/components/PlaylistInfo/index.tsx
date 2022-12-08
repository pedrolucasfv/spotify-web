import * as S from './styles'

export type PlaylistInfoProps = {
  img: string
  name: string
  creator: string
  songNumber: number
  likes: number
}

const PlaylistInfo = ({
  img,
  name,
  songNumber,
  creator,
  likes
}: PlaylistInfoProps) => (
  <S.Wrapper>
    <S.Image src={img} />
    <S.Content>
      <S.Title>PLAYLIST</S.Title>
      <S.Name>{name}</S.Name>
      <S.Info>
        <S.Text>{creator} </S.Text>
        <S.Text>{likes} curtidas </S.Text>
        <S.Text>{songNumber} músicas</S.Text>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default PlaylistInfo
