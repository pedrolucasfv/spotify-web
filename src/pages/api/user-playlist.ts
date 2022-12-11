import { NextApiRequest, NextApiResponse } from 'next'
import { getUserPlaylists } from '../../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //tenta fazer a conexão com a API utilizando os tokens
  const MY_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'
  const response = await getUserPlaylists(MY_PLAYLISTS_ENDPOINT)
  console.log(`response user-playlist: ${response.status}`)

  if (response.status > 400) {
    return res.status(200).json({ title: 'CADÊ AS PLAYLIST SPOTIFYYYYY' })
  }
  //pega o json que a api retorna com os dados de playlist do spotify
  const playlist = await response.json()
  if (playlist.items == null) {
    return res
      .status(200)
      .json({ title: 'NÃO TEM COMO NÃO TER PLAYLIST SPOTIFYYYYYY' })
  }
  //guardando o nome da playlist numa variável
  const title = playlist.items.map((_playlist) => _playlist.name)
  const id = playlist.items.map((_playlist) => _playlist.id)

  console.log(id)
  //retorna a variavel
  return res.status(200).json({
    title,
    id
  })
}
