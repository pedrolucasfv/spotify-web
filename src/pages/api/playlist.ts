import { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylist } from '../../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //tenta fazer a conexão com a API utilizando os tokens
  const MY_PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/playlists/45J9ISXkZvHVP1lOvVXJyj`
  const response = await getPlaylist(MY_PLAYLISTS_ENDPOINT)
  console.log(`response playlist: ${response.status}`)

  if (response.status > 400) {
    return res.status(200).json({ title: 'CADÊ AS PLAYLIST SPOTIFYYYYY' })
  }
  //pega o json que a api retorna com os dados de playlist do spotify
  const playlist = await response.json()
  if (playlist == null) {
    return res
      .status(200)
      .json({ title: 'NÃO TEM COMO NÃO TER PLAYLIST SPOTIFYYYYYY' })
  }
  //guardando o nome da playlist numa variável
  const name = playlist.name
  const img = playlist.images[0].url
  const songNumber = playlist.tracks.total
  const creator = playlist.owner.display_name
  const likes = playlist.followers.total

  //retorna a variavel
  return res.status(200).json({
    name,
    img,
    creator,
    songNumber,
    likes
  })
}
