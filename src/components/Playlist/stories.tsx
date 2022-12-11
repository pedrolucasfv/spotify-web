import { Story, Meta } from '@storybook/react'
import Playlist, { PlaylistProps } from '.'

export default {
  title: 'Playlist',
  component: Playlist,
  args: {
    songs: [
      {
        songName: 'Deixe me ir - Acústico',
        addData: '19 de set. de 2019',
        album: 'Deixe me ir (Acústico)',
        duration: '3:33',
        singers: ['1kilo', 'Knust', 'Baviera'],
        number: 1,
        imgAlbum: '/img/flag-germany.png'
      },
      {
        songName: 'Contexto',
        addData: '19 de set. de 2020',
        album: 'PLANET HEMP',
        duration: '4:55',
        singers: ['MARCELO D2', 'B-Negão'],
        number: 2,
        imgAlbum: '/img/flag-germany.png'
      },
      {
        songName: 'Contexto',
        addData: '19 de set. de 2020',
        album: 'PLANET HEMP',
        duration: '4:55',
        singers: ['MARCELO D2', 'B-Negão'],
        number: 3,
        imgAlbum: '/img/flag-germany.png'
      },
      {
        songName: 'John Cage - Edit',
        addData: '08 de dez. de 2022',
        album: 'John Cage',
        duration: '4:17',
        singers: ['Ross from Friends'],
        number: 4,
        imgAlbum: '/img/flag-germany.png'
      },
      {
        songName: "What's a Girl to Do",
        addData: '19 de set. de 2020',
        album: 'A Girl Between Two Worlds',
        duration: '7:26',
        singers: ['Fatima Yamaha'],
        number: 5,
        imgAlbum: '/img/flag-germany.png'
      }
    ]
  }
} as Meta

export const Default: Story<PlaylistProps> = (args) => <Playlist {...args} />
