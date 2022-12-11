import { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylist } from '../../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //tenta fazer a conexão com a API utilizando os tokens
  const MY_PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/playlists/6no74zDq0CQXWbnBYXwGTy`
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

  const songs = playlist.tracks.items.map((_tracks) => {
    const song = {
      songName: _tracks.track.name,
      singers: _tracks.track.artists.map((_artist) => _artist.name).join(', '),
      album: _tracks.track.album.name,
      addData: _tracks.added_at,
      duration: _tracks.track.duration_ms,
      number: _tracks.track.track_number,
      imgAlbum: _tracks.track.album.images[0].url
    }
    return song
  })
  console.log(songs)
  //retorna a variavel
  return res.status(200).json({
    name,
    img,
    creator,
    songNumber,
    likes,
    songs
  })
}
