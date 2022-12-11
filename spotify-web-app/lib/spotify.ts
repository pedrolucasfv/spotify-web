import { URLSearchParams } from 'url'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
console.log(`client_id: ${client_id}`)
console.log(`client_secret: ${client_secret}`)
console.log(`refresh_token: ${refresh_token}`)

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const START_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
const PAUSE_ENDPOINT = `https://api.spotify.com/v1/me/player/pause`
const USER_PLAYLISTS_ENDPOINT =
  'https://api.spotify.com/v1/users/user_id/playlists'

const getAcessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })
  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAcessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getUserPlaylists = async () => {
  const { access_token } = await getAcessToken()
  return fetch(USER_PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const setResume = async () => {
  const { access_token } = await getAcessToken()
  return fetch(START_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const setPause = async () => {
  const { access_token } = await getAcessToken()
  return fetch(PAUSE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

