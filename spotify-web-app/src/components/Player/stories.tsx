import { Story, Meta } from '@storybook/react'
import Player, { PlayerProps } from '.'

export default {
  title: 'Player',
  component: Player,
  args: {
    image: '/img/flag-germany.png',
    currentSongName: 'Racismo é burrice',
    currentSingers: ['Gabriel Pensador', 'Pedro Lucas']
  }
} as Meta

export const Default: Story<PlayerProps> = (args) => <Player {...args} />
