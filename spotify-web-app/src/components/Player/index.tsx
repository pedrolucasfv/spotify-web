import * as S from './styles'
import { useState } from 'react'
import { PlayCircle } from '@styled-icons/ionicons-solid/PlayCircle'
import { PauseCircle } from '@styled-icons/ionicons-solid/PauseCircle'
import { Shuffle } from '@styled-icons/foundation/Shuffle'
import { PlaySkipBack } from '@styled-icons/ionicons-solid/PlaySkipBack'
import { PlaySkipForward } from '@styled-icons/ionicons-solid/PlaySkipForward'
import { Repeat } from '@styled-icons/ionicons-solid/Repeat'
import { VolumeHigh } from '@styled-icons/ionicons-solid/VolumeHigh'

export type PlayerProps = {
  image: string
  currentSongName: string
  currentSingers: string[]
}

const Player = ({ image, currentSongName, currentSingers }: PlayerProps) => {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <S.Wrapper>
      <S.ContentLeft>
        <S.Image src={image} />
        <S.SongContent>
          <S.SongName>{currentSongName}</S.SongName>
          <S.SingerContent>
            {currentSingers.map((resp) => {
              return <S.Singers key={resp}>{resp} |</S.Singers>
            })}
          </S.SingerContent>
        </S.SongContent>
      </S.ContentLeft>
      <S.ContentMid>
        <S.Control>
          <Shuffle />
          <PlaySkipBack />
          {isPlay ? (
            <PauseCircle onClick={() => setIsPlay(!isPlay)} />
          ) : (
            <PlayCircle onClick={() => setIsPlay(!isPlay)} />
          )}
          <PlaySkipForward />
          <Repeat />
        </S.Control>
        <S.Progress></S.Progress>
      </S.ContentMid>
      <S.ContentRight>
        <VolumeHigh />
      </S.ContentRight>
    </S.Wrapper>
  )
}

export default Player
