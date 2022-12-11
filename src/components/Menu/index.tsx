import * as S from './styles'

//Importações de ícones no styled-icons
import { Search } from '@styled-icons/ionicons-solid/Search'
import { Library } from '@styled-icons/ionicons-solid/Library'
import { Home } from '@styled-icons/foundation/Home'
import { Add } from '@styled-icons/ionicons-solid/Add'
import { Heart } from '@styled-icons/ionicons-solid/Heart'

export type MenuProps = {
  playlists: string[]
}

const Menu = ({ playlists }: MenuProps) => (
  <S.Wrapper>
    <S.Logo />
    <S.Home>
      <Home />
      <S.Text>Início</S.Text>
    </S.Home>
    <S.Search>
      <Search />
      <S.Text>Buscar</S.Text>
    </S.Search>
    <S.Library>
      <Library />
      <S.Text>Sua Biblioteca</S.Text>
    </S.Library>
    <S.CreatePlaylist>
      <S.IconCreatePlaylist>
        <Add />
      </S.IconCreatePlaylist>
      <S.Text>Criar playlist</S.Text>
    </S.CreatePlaylist>
    <S.MusicLiked>
      <S.IconMusicLiked>
        <Heart />
      </S.IconMusicLiked>
      <S.Text>Músicas Curtidas</S.Text>
    </S.MusicLiked>
    <S.Playlists>
      {playlists.map((resp) => {
        return <S.TextPlaylist key={resp}>{resp}</S.TextPlaylist>
      })}
    </S.Playlists>
  </S.Wrapper>
)

export default Menu
