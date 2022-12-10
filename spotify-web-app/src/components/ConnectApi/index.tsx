import * as S from './styles'
import React from 'react'
import $ from 'jquery'

class ConnectApi extends React.Component {
  constructor(props) {
    super(props)
    const parametros = this.getHashParams
    const token = parametros.access_token
  }

  getHashParams() {
    let hashParams = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2])
      e = r.exec(q)
    }
    console.log(this.token)
    return hashParams
  }

  topTracksLorde = () => {
    $.ajax({
      method: 'GET',
      dataType: 'Json',
      url: 'https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR',
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).then((dados) => {
      console.log(dados.tracks[0].name)
    })
  }

  render() {
    return (
      <S.Wrapper>
        <button>
          {' '}
          <a href="http://localhost:8888">LOGAR COM SPOTIFY</a>
        </button>

        <button onClick={this.topTracksLorde}>
          Buscar top tracks da Lorde
        </button>
      </S.Wrapper>
    )
  }
}
export default ConnectApi
