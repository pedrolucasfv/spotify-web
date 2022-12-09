import { Story, Meta } from '@storybook/react'
import ConnectApi from '.'

export default {
  title: 'ConnectApi',
  component: ConnectApi
} as Meta

export const Default: Story = () => <ConnectApi />
