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
  currentSingers: string
  isPlay: boolean
}

const Player = ({
  image,
  currentSongName,
  currentSingers,
  isPlay
}: PlayerProps) => {
  const [isPlaying, setIsPlay] = useState(isPlay)
  return (
    <S.Wrapper>
      <S.ContentLeft>
        <S.Image src={image} />
        <S.SongContent>
          <S.SongName>{currentSongName}</S.SongName>
          <S.Singers>{currentSingers} </S.Singers>
        </S.SongContent>
      </S.ContentLeft>
      <S.ContentMid>
        <S.Control>
          <Shuffle />
          <PlaySkipBack />
          {isPlay ? (
            <PauseCircle onClick={() => setIsPlay(!isPlaying)} />
          ) : (
            <PlayCircle onClick={() => setIsPlay(!isPlaying)} />
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
