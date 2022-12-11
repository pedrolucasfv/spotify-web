import Menu from 'components/Menu'
import Player from 'components/Player'
import Playlist from 'components/Playlist'
import { useEffect, useState } from 'react'
import * as S from './styles'

type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

type UserPlaylistTypes = {
  title: string[]
  id: string[]
}

type PlaylistTypes = {
  img: string
  name: string
  creator: string
  songNumber: number
  likes: number
}
const PlaylistPage = () => {
  // Só UMA MOCK PARA ME AJUDAR A TER CONTEUDO ATÉ CONECTAR NA API
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
  //FUNÇÃO PARA TENTAR COLOCAR AS PLAYLISTS NO MENU

  const [song, setSong] = useState<NowPlayingSong>()
  const [playlists, setPlaylists] = useState<UserPlaylistTypes>({
    title: ['', ''],
    id: ['', '']
  })
  //const [playlistId, setPlaylistId] = useState('')
  const [playlistSelected, setPlaylistSelected] = useState<PlaylistTypes>({
    name: 'kakaka',
    img: '',
    creator: 'tuktuks',
    songNumber: 0,
    likes: 5
  })

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/now-playing')
      const data: NowPlayingSong = await response.json()
      setSong(data)
    }
    async function getPlaylists() {
      const response = await fetch('/api/user-playlist')
      const dados: UserPlaylistTypes = await response.json()
      setPlaylists(dados)
    }
    getData()
    getPlaylists()
  }, [])

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/playlist')
      const data: PlaylistTypes = await response.json()
      setPlaylistSelected(data)
    }

    getData()
  }, [])

  return (
    <S.Wrapper>
      <S.Menu>
        <Menu playlists={playlists.title} />
      </S.Menu>
      <S.Playlist>
        <Playlist songs={songMock} playlistInfo={playlistSelected} />
      </S.Playlist>
      <S.Player>
        {song ? (
          <Player
            image={song.albumImageUrl}
            currentSongName={song.title}
            currentSingers={song.artist}
            isPlay={song.isPlaying}
          />
        ) : (
          <Player
            image="/img/flag-germany.png"
            currentSongName="Racismo é burrice"
            currentSingers="Gabriel pensador, Pedro Lucas"
            isPlay={false}
          />
        )}
      </S.Player>
    </S.Wrapper>
  )
}
export default PlaylistPage
