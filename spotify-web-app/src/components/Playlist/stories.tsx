import { Story, Meta } from '@storybook/react'
import Playlist, { PlaylistProps } from '.'

export default {
  title: 'Playlist',
  component: Playlist,
  args: {
    songName: 'Deixe me ir - Acústico',
    addData: '19 de set. de 2019',
    album: 'Deixe me ir (Acústico)',
    duration: '3:33',
    singers: ['1kilo', 'Knust', 'Baviera'],
    number: 1,
    imgAlbum: '/img/flag-germany.png'
  }
} as Meta

export const Default: Story<PlaylistProps> = (args) => <Playlist {...args} />
