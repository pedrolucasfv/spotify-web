import * as S from './styles'

//Importações de ícones no styled-icons
import { Search } from '@styled-icons/ionicons-solid/Search'
import { Library } from '@styled-icons/ionicons-solid/Library'
//import { Home } from '@styled-icons/foundation/Home'

export type MenuProps = {
  playlists: string[]
}

const Menu = ({ playlists }: MenuProps) => (
  <S.Wrapper>
    <S.Logo />
    <S.Home>
      <Search />
      <S.Text>Início</S.Text>
    </S.Home>
    <S.Search>
      <Search />
      <S.Text>Buscar</S.Text>
    </S.Search>
    <S.Library>
      <Search />
      <S.Text>Sua Biblioteca</S.Text>
    </S.Library>
    <S.CreatePlaylist>
      <Search />
      <S.Text>Criar playlist</S.Text>
    </S.CreatePlaylist>
    <S.MusicLiked>
      <Search />
      <S.Text>Músicas Curtidas</S.Text>
    </S.MusicLiked>
    <S.Playlists>
      {playlists.map((resp) => {
        return <S.TextPlaylist>{resp}</S.TextPlaylist>
      })}
    </S.Playlists>
  </S.Wrapper>
)

export default Menu
