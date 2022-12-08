import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    playlists: ['raça negra', 'xupetinha para estudar', 'ela não é o tipo']
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
