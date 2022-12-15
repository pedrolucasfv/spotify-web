import { URLSearchParams } from 'url'
//variaveis para ter conseguir o access token para conectar a API
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
console.log(`client_id: ${client_id}`)
console.log(`client_secret: ${client_secret}`)
console.log(`refresh_token: ${refresh_token}`)

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

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

export const getNowPlaying = async (endpoint) => {
  const { access_token } = await getAcessToken()
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getUserPlaylists = async (endpoint) => {
  const { access_token } = await getAcessToken()
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getPlaylist = async (endpoint) => {
  const { access_token } = await getAcessToken()
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
