import * as S from './styles'
import { useState } from 'react'
import { useEffect } from 'react'

//ESSE AQUI É SÓ UM COMPONENTE PARA TENTAR FAZER A APLICAÇÂO CONECTAR COM A API
type NowPlayingSong = {
  album: string
  albumImageUrl: string
  article: string
  isPlaying: boolean
  songUrl: string
  title: string
}

const ConnectApiAux = () => {
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
      {song?.songUrl ? <a>{song.title}</a> : <p>No music</p>}
    </S.Wrapper>
  )
}
export default ConnectApiAux
