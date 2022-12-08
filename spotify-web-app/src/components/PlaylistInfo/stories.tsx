import { Story, Meta } from '@storybook/react'
import PlaylistInfo, { PlaylistInfoProps } from '.'

export default {
  title: 'PlaylistInfo',
  component: PlaylistInfo,
  args: {
    img: '/img/flag-germany.png',
    name: 'PLANET HEMP ALEMÃO',
    songNumber: 27,
    creator: 'Nim',
    likes: 16
  }
} as Meta

export const Default: Story<PlaylistInfoProps> = (args) => (
  <PlaylistInfo {...args} />
)
