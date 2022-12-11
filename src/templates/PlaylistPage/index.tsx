import Menu from 'components/Menu'
import Player from 'components/Player'
import Playlist from 'components/Playlist'
import { SongProps } from 'components/Song'
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
  songs: SongProps[]
}
const PlaylistPage = () => {
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
    likes: 5,
    songs: [
      {
        songName: '',
        singers: '',
        album: '',
        addData: '',
        duration: 0,
        number: 0,
        imgAlbum: ''
      }
    ]
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
        <Playlist
          songs={playlistSelected.songs}
          playlistInfo={playlistSelected}
        />
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
