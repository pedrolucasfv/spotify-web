import { Story, Meta } from '@storybook/react'
import Song, { SongProps } from '.'

export default {
  title: 'Song',
  component: Song,
  args: {
    songName: 'Deixe me ir - Acústico',
    addData: '19 de set. de 2019',
    album: 'Deixe me ir (Acústico)',
    duration: '3:33',
    singers: '1kilo, Baviera',
    number: 1,
    imgAlbum: '/img/flag-germany.png'
  }
} as Meta

export const Default: Story<SongProps> = (args) => <Song {...args} />
