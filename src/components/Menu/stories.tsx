import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    playlists: ['raça negra', 'playlist para estudar', 'músicas para socorro']
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
