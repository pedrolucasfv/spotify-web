import Menu from 'components/Menu'
import Player from 'components/Player'
import Playlist from 'components/Playlist'
import { SongsProps } from 'components/Song'
import { useEffect, useState } from 'react'
import * as S from './styles'

type NowPlayingSong = {
  album: string
  albumImageUrl: string
  article: string
  isPlaying: boolean
  songUrl: string
  title: string
}

const PlaylistPage = () => {
  
  const songMock = [
    {
      songName: 'Deixe me ir - Acústico',
      addData: '19 de set. de 2019',
      album: 'Deixe me ir (Acústico)',
      duration: '3:33',
      singers: ['1kilo', 'Knust', 'Baviera'],
      number: 1,
      imgAlbum: '/img/flag-germany.png'
    },
    {
      songName: 'Contexto',
      addData: '19 de set. de 2020',
      album: 'PLANET HEMP',
      duration: '4:55',
      singers: ['MARCELO D2', 'B-Negão'],
      number: 2,
      imgAlbum: '/img/flag-germany.png'
    },
    {
      songName: 'Contexto',
      addData: '19 de set. de 2020',
      album: 'PLANET HEMP',
      duration: '4:55',
      singers: ['MARCELO D2', 'B-Negão'],
      number: 3,
      imgAlbum: '/img/flag-germany.png'
    },
    {
      songName: 'John Cage - Edit',
      addData: '08 de dez. de 2022',
      album: 'John Cage',
      duration: '4:17',
      singers: ['Ross from Friends'],
      number: 4,
      imgAlbum: '/img/flag-germany.png'
    },
    {
      songName: "What's a Girl to Do",
      addData: '19 de set. de 2020',
      album: 'A Girl Between Two Worlds',
      duration: '7:26',
      singers: ['Fatima Yamaha'],
      number: 5,
      imgAlbum: '/img/flag-germany.png'
    }
  ]

  const [song, setSong] = useState<NowPlayingSong>()

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/now-playing')
      const data: NowPlayingSong = await response.json()
      setSong(data)
    }
    getData()
  }, [])
  console.log(song)

  return (
    <S.Wrapper>
      <S.Menu>
        <Menu
          playlists={[
            'raça negra',
            'playlist para estudar',
            'músicas para socorro'
          ]}
        />
      </S.Menu>
      <S.Playlist>
        <Playlist songs={songMock} />
      </S.Playlist>
      <S.Player>
        <Player
          image="/img/flag-germany.png"
          currentSongName="Racismo é burrice"
          currentSingers={['Gabriel Pensador', 'Pedro Lucas']}
        />
      </S.Player>
    </S.Wrapper>
  )
}
export default PlaylistPage
